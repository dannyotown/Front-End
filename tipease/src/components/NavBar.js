//JaxAtwood

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Router>
                <div>
                    <a href="/">Home</a>
                    <a href="/login">Log In</a>
                    <a href="/">Profile?</a>
                    <a href="/">FAQ's?</a>
                </div>
            </Router>
        </div>
    )
}