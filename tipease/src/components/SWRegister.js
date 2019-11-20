//JaxAtwood
//NEEDS VALUES, HANDLE CHANGES, AXIOS, PROPS, USESTATE

import React from "react";
import { Box, Fields } from "../styling/SWReg";

export default function SWRegister() {
    return (
        <Box>
            <h2>Worker Registry</h2>
            <form>
                <Fields 
                    required
                    type="text"
                    placeholder="username"
                    name="username" 
                />
                <Fields 
                    required
                    type="password"
                    placeholder="password"
                    name="password" 
                />
                <Fields 
                    required
                    type="text"
                    placeholder="first name"
                    name="first name" 
                />
                <Fields 
                    required
                    type="text"
                    placeholder="last name"
                    name="last name" 
                />
                <Fields 
                    required
                    type="text"
                    placeholder="email"
                    name="email" 
                />
                <Fields 
                    required
                    type="text"
                    placeholder="company name"
                    name="company" 
                />
                <button>Submit</button>
            </form>
            <a href="/">Already Have an Account?</a>
        </Box>
    )
}