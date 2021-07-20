import React from "react";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import MeetingImg from "../img/meeting.png";

const Meeting = () => {
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
      <section className='members'>
      modal
      <input type="email" placeholder='Correo' />
      <input type="text" placeholder='Nombre Completo' />
      <input type="email" placeholder='Correo' />
      <input type="text" placeholder='Nombre Completo' />
      <input type="email" placeholder='Correo' />
      <input type="text" placeholder='Nombre Completo' />
      </section>
      <section className='selectMeeting'>
      A
      B
      C
      D
      E
      F
      G
      H
      I
        <img src={MeetingImg} alt="Mapeo de oficinas" />
      </section>
    </React.Fragment>
  );
};

export default Meeting;