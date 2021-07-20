import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login.jsx";
import { Schedule } from "./views/Schedule.jsx";
import { Meeting } from "./views/Meeting.jsx";
import { Office } from "./views/Office.jsx";
import { Booking } from "./views/Booking.jsx";
import { Logout } from "./views/Logout.jsx";

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
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
