import styled from "styled-components";

const Logo = styled.img `
    width: 150px;
    margin-left: 50px;
    padding: 20px;
`
const LogoAgain = styled.img `
    width: 200px;
    height: 75px;
    margin-top: 60px;
    margin-left: 10px;
`

const Nav = styled.div `
    border: teal solid 3px;
    display: flex;
    width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    background-color: white;
`

const Navvy = styled.div `
    width: 40%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding-top: 80px;
`

const Links = styled.a `
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
    border: solid black 1px;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: #00cccc;
`

export { Nav, Links, Logo, LogoAgain, Navvy };