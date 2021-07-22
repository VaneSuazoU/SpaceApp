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
      <Link to="/adminLogin" className="adminAcces">Acceso Administrador</Link>
      <section className="contLogin">
        <div className=""><p>Inicia sesión mediante tu cuenta corporativa</p></div>
        <div className="login">
          Nombre de usuario
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          <Link to="/recover" className="passRecover">¿Olvidaste tu cotraseña?</Link>
          <Link to="/booking" className="btnLogin">
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
