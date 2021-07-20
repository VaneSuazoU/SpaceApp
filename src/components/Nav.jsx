import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbarBc">
      <div className="container">
        <div className="btn-group">
          <NavLink to="/schedule" className="btn btnNav">
            Agendar
          </NavLink>
          <NavLink to="/meeting" className="btn btnNav">
            Mi Agenda
          </NavLink>
          <NavLink to="/booking" className="btn btnNav">
            Reuniones
          </NavLink>
          <NavLink to="/office" className="btn btnNav">
            Oficinas
          </NavLink>
          <NavLink to="/logout" className="btn btnNav">
            Cerrar Sesión
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
