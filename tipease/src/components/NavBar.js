//JaxAtwood

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Links, Logo, LogoAgain, Navvy } from "../styling/NavStyling";

export default function NavBar(props) {
  return (
    <div>
      <Router>
        <div>
            <Router>
                <Nav>
                    <Logo src="logo.png" ></Logo>
                    <LogoAgain src="logo2.png"></LogoAgain>
                        <Navvy>
                            <Links href="/">Home</Links>
                            <Links href="/">About</Links>
                            <Links href="/">FAQ's</Links>
                        </Navvy>
                </Nav>
            </Router>
        </div>
      </Router>
    </div>
  );
}
