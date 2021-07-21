import React from "react";
import { NavLink } from "react-router-dom";
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
    <div className="navbarMain">
      <nav className="navbar navbarBc">
        <div className="btn-group-vertical">
          <NavLink
            to="/booking"
            className="btn btnNav btn-lg active"
            role="button"
            aria-pressed="true"
            activeStyle={{
              color: '#ffffff',
              background: "#99ae21",
            }}
          >
            <img src={Schedule} alt="schedule" />
            Agendar
          </NavLink>
          <NavLink
            to="/schedule"
            className="btn btnNav btn-lg active"
            role="button"
            activeStyle={{
              color: '#ffffff',
              background: "#99ae21",
            }}
          >
            <img src={User} alt="user" />
            Mi Agenda
          </NavLink>
          <NavLink
            to="/meeting"
            className="btn btnNav btn-lg active"
            role="button"
            activeStyle={{
              color: '#ffffff',
              background: "#99ae21",
            }}
          >
            <img src={Meets} alt="meets" />
            Reuniones
          </NavLink>
          <NavLink
            to="/office"
            className="btn btnNav btn-lg active"
            role="button"
            activeStyle={{
              background: "#99ae21",
              color: '#ffffff'
            }}
          >
            <img src={Office} alt="office" />
            Oficinas
          </NavLink>
          
        </div>
      </nav>
      <hr />
      <div className="btn-group-vertical">
      <div
        onClick={() => logout()}
        className="btn btnNav btn-lg active"
        role="button"
      >
        <img src={Logout} alt="logout" />
        Cerrar Sesión
      </div>
      </div>
    </div>
  );
};

export default withRouter(Nav);
