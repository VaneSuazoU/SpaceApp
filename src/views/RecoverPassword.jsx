import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <React.Fragment>
      <div className="sidebarBG">
        <section className="sideBar">
          <img src={Logo} height="160" alt="everis" />
        </section>
      </div>
      <section className="contLogin">
        <div className="">
          <p>
            Ingresa tu correo electrónico y te enviaremos un enlace para que
            recuperes tu cuenta.
          </p>
        </div>
        <div className="login">
          <input
            email="text"
            className="loginInput"
            placeholder="example@example.cl"
          />
          <Link to="/" className="btnLogin">
            Volver
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RecoverPassword;
