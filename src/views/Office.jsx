import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Attendees from "../components/Attendees";
import OfficeMap from "../components/OfficeMap";

const Office = () => {
  return (
      <React.Fragment>
        <Header />
        <Nav />
        Y aca va la otra wea de las oficinas de mierda
        <Attendees />
        <OfficeMap />
      </React.Fragment>
  );
};

export default Office;

