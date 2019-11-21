import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SWLogin from "./components/SWLogin";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SWRegister from "./components/SWRegister";
import ConsumerRegister from "./components/ConsumerRegister";
import Profile from "./components/Profile";
import SWProfile from "./components/SWProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login {...props} />;
            }}
          />
          <Route
            exact
            path="/swlogin"
            render={props => {
              return <SWLogin {...props} />;
            }}
            />
          <Route exact path="/service" component={SWRegister} />
          <Route exact path="/consumer" component={ConsumerRegister} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/swprofile" component={SWProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
