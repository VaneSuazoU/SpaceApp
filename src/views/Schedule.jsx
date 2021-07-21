import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Schedule = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section className="dateContainer">
        <label for=""><h5>Desde</h5></label>
        <input type="date" name="" id="" /> - 
        <label for=""><h5>Hasta</h5></label>
        <input type="date" name="" id="" />
        <button className="today">Hoy</button>
      </section>
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
