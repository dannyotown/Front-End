import styled from "styled-components";

const Box = styled.div `
    border: black solid 2px;
    width: 400px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 20px;
`

// const Labels = styled.label `
//     // color: blue;
//     margin: 0 auto;
//     display: flex;
//     justify-content: center;
//     margin: 5px;
// `

const Fields = styled.input `
    display: flex;
    text-align: center;
    margin: 10px;
    height: 20px;
    width: 200px;
`

export { Box, Fields };