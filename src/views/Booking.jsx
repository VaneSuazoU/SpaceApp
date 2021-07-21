import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import shortid from "shortid";
import AttendeesModal from "../components/Attendees";
// import { savebooking } from "../firebase";

const Booking = () => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [qtyAttendees, setQtyAttendees] = useState(null);
  const [attendees, setAttendees] = useState([]);

  const request = () => {
    const booking = { id: shortid.generate(), startTime, endTime, date, type };

    console.log(booking);
    //  savebooking(booking);
  };

  const loadModal = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    // setQtyAttendees(value);
  };

  request();
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main className="booking">
        <section className="mainContent">
          <h3 className='bookingTitle'>¿Qué necesitas agendar?</h3>
          <div className="btnContainer">
            <button className="btnOffice" onClick={() => setType("jornada")}>
              Jornada
            </button>
            <button className="btnMeeting" onClick={() => setType("reunion")}>
              Reunión
            </button>
          </div>
        </section>
        <section className="mainOptions">
          <input
            type="date"
            name=""
            id=""
            onChange={(e) => setDate(e.target.value)}
          />
          <input type="time" onChange={(e) => setStartTime(e.target.value)} />
          <input type="time" onChange={(e) => setEndTime(e.target.value)} />
          <button
            id="attendees"
            className="btn btn-info"
            data-backdrop="static"
            data-keyboard="false"
            data-toggle="modal"
            data-target="#modalAttendees"
            onClick={(e) => loadModal(e)}
          >
            {" "}
            Añadir asistentes
          </button>

          <AttendeesModal />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Booking;
