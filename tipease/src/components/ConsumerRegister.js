//JaxAtwood
//NEEDS VALUES, HANDLE CHANGES, AXIOS, PROPS, USESTATE

import React from "react";
import { Box, Fields } from "../styling/SWReg";

export default function ConsumerRegister() {
    return (
        <Box>
            <h2>Customer Registry</h2>
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
            </form>
            <a href="/">Already Have an Account?</a>
        </Box>
    )
}