import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="sidebarBG">
        <section className="sideBar">
          <img src={Logo} height="160" alt="everis" />
        </section>
      </div>
      <Link to="/" className="adminAcces">Acceso Administrador</Link>
      <section className="contLogin">
        <div className="">Inicia sesión mediante tu cuenta corporativa</div>
        <div className="login">
          Nombre de usuario
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          <Link to="/" className="passRecover">¿Olvidaste tu cotraseña?</Link>
          <Link to="/booking" className="btnLogin">
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
