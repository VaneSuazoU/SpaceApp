import React, { useState } from "react";
import data from "../../src/data/data.json";
import Nav from "../components/Nav";
import HeaderAdmin from "../components/HeaderAdmin";

const Admin = () => {
  const [phase, setPhase] = useState();

  const oficces = data;

  const oficcesPhase = oficces.filter((oficce) => oficce.phases === phase);
  return (
    <React.Fragment>
      <Nav />
      <HeaderAdmin />
      <main>
        <section className='adminContainer'>
          <button type="button" class="btn btnPhase" data-bs-toggle="button" autocomplete="off" value="1" onClick={(e) => setPhase(e.target.value)}>
            Fase Uno
          </button>
          <button type="button" class="btn btnPhase" data-bs-toggle="button" autocomplete="off" value="2" onClick={(e) => setPhase(e.target.value)}>
            Fase Dos
          </button>
          <button type="button" class="btn btnPhase" data-bs-toggle="button" autocomplete="off" value="3" onClick={(e) => setPhase(e.target.value)}>
            Fase Tres
          </button>
          </section>
          <section className='adminDataA'>
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
