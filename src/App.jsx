import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Schedule from "./views/Schedule";
import Meeting from "./views/Meeting";
import Office from "./views/Office";
import Booking from "./views/Booking";
import Admin from "./views/Admin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/meeting">
          <Meeting />
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
        <Route exact path="/office">
          <Office />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
