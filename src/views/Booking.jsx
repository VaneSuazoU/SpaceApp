import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Booking = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main className="booking">
        <section className="mainContent">
          <h3>¿Qué necesitas agendar?</h3>
          <div className="btnContainer">
            <button className="btnOffice">Jornada</button>
            <button className="btnMeeting">Reunión</button>
          </div>
        </section>
        <section className="mainOptions">
          <input type="date" name="" id="" />
          <input type="time" />
          <input type="time" />
          <input type="number" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Booking;
