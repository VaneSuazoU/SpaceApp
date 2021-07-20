import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import Meets from '../img/meetingicon.png';
import Office from '../img/officeicon.png';
import Schedule from '../img/schedule.png';
import User  from '../img/user.png';
import Logout from '../img/logout.png'

export const Nav = () => {
  return (
    <nav className="navbar navbarBc">
      <div className="container">
        <div className="btn-group">
          <NavLink to="/schedule" className="btn btnNav"><img src={Schedule} alt="schedule" />
            Agendar
          </NavLink>
          <NavLink to="/meeting" className="btn btnNav"><img src={User} alt="user" />
            Mi Agenda
          </NavLink>
          <NavLink to="/booking" className="btn btnNav"><img src={Meets} alt="m eets" />
            Reuniones
          </NavLink>
          <NavLink to="/office" className="btn btnNav"><img src={Office} alt="office" />
            Oficinas
          </NavLink>
          <NavLink to="/logout" className="btn btnNav"><img src={Logout} alt="logout" />
            Cerrar Sesión
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
