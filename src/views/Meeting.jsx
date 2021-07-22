import React  from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Attendees from "../components/Attendees";
import MeetingMap from "../components/MeetingMap";
import ShowMeeting from "../components/ShowMeetings";

const Meeting = () => {
  const showSchedule = () => {
    const section = document.querySelector("#showUser");
    section.className = "show";
  };
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Attendees />
      <main className="meetContainer">
        <section className="header">
          <h1>Reuniones</h1>
        </section>
        <section className="search">
          <h5>Buscar participantes</h5>
          <input type="text"></input>
          <button onClick={() => showSchedule()}>Ver</button>
        </section>
        <section id="showUser" className="userLista">
          {" "}
          <ShowMeeting/>
        </section>
        <MeetingMap />
      </main>
    </React.Fragment>
  );
};

export default Meeting;
