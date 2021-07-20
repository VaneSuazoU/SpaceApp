import React from "react";
import  Nav  from "../components/Nav";
import { Header } from "../components/Header";
import OfficeImg from "../img/office.png";

const Office = () => {
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
        <section className='selectOffice'>
          G1
          G2
          G3
          G4
          G5
          G6
          G7
          G8
          G9
          G10
          G11
          G12
          
        <img src={OfficeImg} alt="Mapeo de oficinas" />
        </section>
      </React.Fragment>
  );
};

export default Office;

