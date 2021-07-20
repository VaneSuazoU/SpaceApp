import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Login } from './views/Login.jsx';
import { Schedule } from './views/Schedule.jsx';
import { Meeting } from './views/Meeting.jsx';
import { WorkDay } from './views/WorkDay.jsx';
import { Booking } from './views/Booking.jsx';
import { Logout } from './views/Logout.jsx';

const App = () => {
  return (
    <Router>      
      <div className="container">
        <Switch>
          <Route path ='/' exact>
            <Login />
          </Route>
          <Route path ='/schedule'>
            <Schedule />
          </Route>
          <Route path ='/meeting'>
            <Meeting />
          </Route>
          <Route path ='/booking'>
            <Booking />
          </Route>
          <Route path ='/workday'>
            <WorkDay />
          </Route>
          <Route path ='/logout'>
            <Logout />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
