import React from "react";
import { Link, NavLink } from "react-router-dom";
import Meets from "../img/meetingicon.png";
import Office from "../img/officeicon.png";
import Schedule from "../img/schedule.png";
import User from "../img/user.png";
import Logout from "../img/logout.png";
import { withRouter } from "react-router";
import swal from "sweetalert";

const Nav = (props) => {
  const logout = () => {
    swal({
      title: "¿Deseas cerrar sesión?",
      text: "Presiona OK para confirmar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Haz finalizado tu sesión", {
          icon: "success",
        });
        props.history.push("/");
      }
    });
  };

  return (
    <nav className="navbar navbarBc">
      <div className="container">
        <div className="btn-group">
          <NavLink to="/schedule" className="btn btnNav">
            <img src={Schedule} alt="schedule" />
            Agendar
          </NavLink>
          <NavLink to="/meeting" className="btn btnNav">
            <img src={User} alt="user" />
            Mi Agenda
          </NavLink>
          <NavLink to="/booking" className="btn btnNav">
            <img src={Meets} alt="meets" />
            Reuniones
          </NavLink>
          <NavLink to="/office" className="btn btnNav">
            <img src={Office} alt="office" />
            Oficinas
          </NavLink>
          <Link onClick={() => logout()} className="btn btnNav">
            <img src={Logout} alt="logout" />
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
