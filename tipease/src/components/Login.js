//dtown

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function LogIn() {
  const [getLogin, setLogin] = useState({
    username: "",
    password: ""
  });

  const onChangeHandle = e => {
    e.preventDefault();
    setLogin({
      ...getLogin,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://tipsease-msm.herokuapp.com/api/customers/login", getLogin)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  return (
    <LoginDiv>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}>
        <LoginInput
          type="text"
          name="username"
          value={getLogin.username}
          onChange={onChangeHandle}
          placeholder="Username"
        />
        <LoginInput
          type="password"
          name="password"
          value={getLogin.password}
          onChange={onChangeHandle}
          placeholder="Password"
        />
        <LoginButton type="submit">Log In</LoginButton>
      </LoginForm>
    </LoginDiv>
  );
}

const LoginDiv = styled.div`
  width: 20%;
  margin: 0 auto;
  background-color: #00cccc;
  color: white;
  padding: 1%;
  box-shadow: 3px 4px #f2f2f2;
`;
const LoginInput = styled.input`
  height: 25px;
  margin-top: 2.5%;
  padding: 0.5%;
`;
const LoginButton = styled.button`
  height: 32px;
  width: 99%;
  margin: 0 auto;
  background-color: white;
  border: solid 1px #b8b8b8;
  font-size: 1.25rem;
  color: #00cccc;
  margin-top: 5%;
`;
const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: 50px;
  padding: 20px;
`;
const LogoAgain = styled.img`
  width: 200px;
  height: 75px;
  margin-top: 60px;
  margin-left: 10px;
`;

export default LogIn;
