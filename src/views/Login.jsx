import React from "react";
import Logo from "../img/logo.png";

const Login = () => {
  return (
    <div>
      <section className="sideBar">
        <img src={Logo} alt="everis" />
      </section>
      <section className="contLogin">
        <div className="">Inicia sesión mediante tu cuenta corporativa</div>
        <div className="">
          Nombre de usuario
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          ¿Olvidaste tu cotraseña?
          <button className="btnLogin">Iniciar Sesión</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
