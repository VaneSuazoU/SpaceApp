import React from "react";
import MeetingImg from "../img/meeting.png";

const MeetingMap = () => {
  return (
    <React.Fragment>
      <img className="map" src={ MeetingImg } alt="Mapa de salas de reuniones" />
    </React.Fragment>
  );
};

export default MeetingMap;
