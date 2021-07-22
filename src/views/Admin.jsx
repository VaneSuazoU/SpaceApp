import React, { useState } from "react";
import data from "../../src/data/data.json";
import Nav from "../components/Nav";

const Admin = () => {
  const [phase, setPhase] = useState();

  const oficces = data;

  const oficcesPhase = oficces.filter((oficce) => oficce.phases === phase);
  return (
    <React.Fragment>
      <Nav />
      <main>
        <section>
          <button value="1" onClick={(e) => setPhase(e.target.value)}>
            Fase Uno
          </button>
          <button value="2" onClick={(e) => setPhase(e.target.value)}>
            Fase Dos
          </button>
          <button value="3" onClick={(e) => setPhase(e.target.value)}>
            Fase Tres
          </button>
          {oficcesPhase.map((item, index) => (
            <div>
              {item.name}
              {"\n"}
              Capacidad:{item.capacity}
            </div>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Admin;
