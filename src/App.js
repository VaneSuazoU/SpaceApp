import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login.jsx";
import { Schedule } from "./views/Schedule.jsx";
import { Meeting } from "./views/Meeting.jsx";
import { WorkDay } from "./views/WorkDay.jsx";
import { Booking } from "./views/Booking.jsx";
import { Logout } from "./views/Logout.jsx";
import {Nav} from "./views/Nav"

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Nav/>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/meeting">
            <Meeting />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/workday">
            <WorkDay />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
