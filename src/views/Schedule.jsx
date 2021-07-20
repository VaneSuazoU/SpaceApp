import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Schedule = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section className="dateContainer">
        Desde Hasta
        <input type="date" /> - <input type="date" name="" id="" />
        <button className="today">Hoy</button>
      </section>
      fecha de hoy
      <section className="meetingsContainer">
        <div className="infoCard">
          <p>Info blablablabla</p>
          <div className="editBtn">
            <button className="btnCancel">Cancelar</button>
            <button className="btnEdit">Editar</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Schedule;
