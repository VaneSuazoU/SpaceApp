import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Attendees from "../components/Attendees";
import MeetingMap from "../components/MeetingMap";



const Meeting = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <section>
        Aca va la wea de quien chucha está en la reu
      </section>
      <Attendees />
      <MeetingMap />
    </React.Fragment>
  );
};

export default Meeting;