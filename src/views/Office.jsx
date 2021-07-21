import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Attendees from "../components/Attendees";
import OfficeMap from "../components/OfficeMap";
import SuccessBooking from '../components/SuccessBooking';

const Office = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />

      <Attendees />
      <SuccessBooking/>
      <OfficeMap />
    </React.Fragment>
  );
};

export default Office;
