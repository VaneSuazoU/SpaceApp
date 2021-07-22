import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <React.Fragment>
      <div className="sidebarBG">
        <section className="sideBar">
          <img src={Logo} height="160" alt="everis" />
        </section>
      </div>
         <section className="contLogin">
        <div className="">Acceso Administrador</div>
        <div className="login">
          <p>Nombre de usuario</p>
          <br/>
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          <Link to="/" className="passRecover">¿Olvidaste tu cotraseña?</Link>
          <Link to="/admin" className="btnLogin">
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AdminLogin;
