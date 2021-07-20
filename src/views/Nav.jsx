import React from "react";
import Logo from '../img/logo.png'
import { BrowserRouter as NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navbar navbarBc">
      <div className="container">
        <div className="btn-group">
          <NavLink
            to="/"
            className="btn btnNav btn-lg mx-2"
            activeClassName="active"
          >
            <img src={Logo} height="26" alt="everis" />
          </NavLink>
          <NavLink to="/schedule" className="btn btnNav btn-lg mx-2">
            {" "}
            Agendar{" "}
          </NavLink>
          <NavLink to="/meeting" className="btn btnNav btn-lg mx-2">
            {" "}
            Mi Agenda{" "}
          </NavLink>
          <NavLink to="/booking" className="btn btnNav btn-lg mx-2">
            {" "}
            Reuniones{" "}
          </NavLink>
          <NavLink to="/workday" className="btn btnNav btn-lg mx-2">
            {" "}
            Oficinas{" "}
          </NavLink>
          <NavLink to="/logout" className="btn btnNav btn-lg mx-2">
            {" "}
            Cerrar Sesión{" "}
          </NavLink>
          <div className="separate mt-2">|</div>
          </div>
        </div>
    </nav>
  );
};
