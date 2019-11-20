//JaxAtwood

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar(props) {
  console.log(props);
  return (
    <div>
      <Router>
        <div>
          <a href="/">Home</a>
          {!props.loggedInOrOut && <a href="/login">Log In</a>}
          <a href="/">Profile?</a>
          <a href="/">FAQ's?</a>
        </div>
      </Router>
    </div>
  );
}
