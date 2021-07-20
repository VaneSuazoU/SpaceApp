import React from "react";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";

const Booking = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section className="mainContainer">
        <h3>¿Qué necesitas agendar?</h3>
        <button className="btnOffice">Jornada</button>
        <button className="btnMeeting">Reunión</button>
      </section>
      <section className='mainOptions'>
      <input type="date" name="" id="" />
      <input type="time" />
      <input type="time" />
      <input type="number" />
      </section>
    </React.Fragment>
  );
};

export default Booking;