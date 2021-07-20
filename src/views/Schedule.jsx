import React from "react";
import  Nav  from "../components/Nav";
import { Header } from "../components/Header";

const Schedule = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section className="dateContainer">
        Desde    Hasta
        <input type="date" /> - <input type="date" name="" id="" /><button className="today">Hoy</button>
        </section>
        <section className='meetingsContainer'>
        fecha de hoy
          <div className='card'>
            <p>Info blablablabla</p>
          <button className="btnCancel">Cancelar</button>
          <button className="btnEdit">Editar</button>
          </div>
        </section>
      
    </React.Fragment>
  );
};

export default Schedule;
