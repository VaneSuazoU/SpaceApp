import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Attendees from "../components/Attendees";
import OfficeMap from "../components/OfficeMap";
import ShowOffice from "../components/ShowOffice";

const Office = () => {
  const showOffice = () => {
    const section = document.querySelector("#showUser");
    section.className = "show2";
  };
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Attendees />
      <main className="meetContainer">
        <section className="header">
          <h1>Jornadas</h1>
        </section>
        <section className="search">
          <h5>Buscar participantes</h5>
          <input type="text"></input>
          <button onClick={() => showOffice()}>Ver</button>
        </section>
        <section id="showUser" className="userLista2">
          {" "}
          <ShowOffice />
        </section>
        <OfficeMap />
      </main>
    </React.Fragment>
  );
};

export default Office;
