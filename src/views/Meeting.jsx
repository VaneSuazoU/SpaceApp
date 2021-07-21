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
      <Attendees />
      <section>
        <div>
          <div>
            <h1>Reuniones</h1>
            <ul className="userListA">
              <li>
                <h3> Sala A </h3>
                <br />
              </li>
              <li>
                <p> Vanessa Suazo </p>
              </li>
              <li>
                <p> Nicole Perisc </p>
              </li>
              <li>
                <p> Marjorie Lagos </p>
              </li>
              <li>
                <p> Mailys Brizuela </p>
              </li>
            </ul>
            <hr size="2px" color="black" width="50%" />
            <ul className="userListB">
              <li>
                <h3> Sala B </h3>
                <br />
              </li>
              <li>
                <p> Luis Patria </p>
              </li>
              <li>
                <p> Carlos Rodriguez </p>
              </li>
              <li>
                <p> Marcos Luna </p>
              </li>
              <li>
                <p> María Medrano </p>
              </li>
            </ul>
          </div>
        </div>
        <MeetingMap />
      </section>
    </React.Fragment>
  );
};

export default Meeting;
