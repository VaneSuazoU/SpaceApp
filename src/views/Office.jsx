import React from "react";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";

export const Office = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section className="mainContainer">
        <h3>¿Qué necesitas agendar?</h3>
        <button className="btnOffice active">Jornada</button>
        <button className="btnMeeting">Reunión</button>
      </section>
    </React.Fragment>
  );
};