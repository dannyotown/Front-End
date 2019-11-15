import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SWRegister from './components/SWRegister';
import ConsumerRegister from './components/ConsumerRegister';

function App() {
  return (
   <div>
     <NavBar />
     <Router>
       <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/service" component={SWRegister} />
        <Route exact path="/consumer" component={ConsumerRegister} />
      </Switch>
      </Router>
     <Logout />
   </div>
  );
}

export default App;


