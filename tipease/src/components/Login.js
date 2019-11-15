//dtown

import React, {useState} from "react";
import axios from 'axios';

export default function LogIn() {
    const [getLogin, setLogin] = useState({
        username: '',
        password: ''
    })

    const onChangeHandle = e => {
        e.preventDefault();
        setLogin({
            ...getLogin,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('https://tipsease-msm.herokuapp.com/api/customers/login', getLogin)
        .then(response => console.log(response))
        .catch(error=>console.log(error))
    }
    return (
        <form onSubmit={onSubmit}>
        <input
        type="text"
        name="username"
        value={getLogin.username}
        onChange={onChangeHandle}
        placeholder="Username"
        />
        <input
        type="password"
        name="password"
        value={getLogin.password}
        onChange={onChangeHandle}
        placeholder="Password"
        />
        <button type="submit">Log In</button>
        </form>
    )
}