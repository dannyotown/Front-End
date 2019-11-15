//JaxAtwood

import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome Page</h1>
            <p>Get Started Today</p>
            <Link to="/consumer">
                <button>Consumer</button>
            </Link>
            <Link to="/service" >
                <button>Service Worker</button>
            </Link>
        </div>
    )
}