import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Logout from "./components/Logout";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SWRegister from "./components/SWRegister";
import ConsumerRegister from "./components/ConsumerRegister";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getToken } from "./utils/api";
import ServiceHome from "./components/ServiceHome";
import "./App.css";

function App() {
  const loggedInOrOut = getToken();
  return (
    <div>
      <NavBar loggedInOrOut={loggedInOrOut} />
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About}/>
          <Route
            exact
            path="/login"
            render={props => {
              return <Login {...props} />;
            }}
          />
          <ProtectedRoute exact path="/service" component={SWRegister} />
          <ProtectedRoute exact path="/consumer" component={ConsumerRegister} />
          <ProtectedRoute exact path="/service/home" component={ServiceHome} />
        </Switch>
      </Router>
      <Logout />
    </div>
  );
}

export default App;
