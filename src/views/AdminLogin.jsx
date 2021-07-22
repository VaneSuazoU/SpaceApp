import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div>
      <div className="sidebarBG">
        <section className="sideBar">
          <img src={Logo} height="160" alt="everis" />
        </section>
      </div>
         <section className="contLogin">
        <div className="">Acceso Administrador</div>
        <div className="login">
          Nombre de usuario
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          <Link to="/" className="passRecover">¿Olvidaste tu cotraseña?</Link>
          <Link to="/admin" className="btnLogin">
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
