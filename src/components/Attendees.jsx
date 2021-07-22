import React from "react";

const Attendees = () => {
  let contador = 0;
  const addAttendees = (e) => {
    e.preventDefault();
    contador++;
    const id = "a" + contador;
    const div = document.querySelector("#attendeesDiv");
    const col1 = document.createElement("div");
    col1.className = "col-3";
    col1.id = id;
    const input = document.createElement("input");
    input.className = "form-control";
    input.type = "email";
    input.placeholder = "Correo";
    col1.appendChild(input);

    const col2 = document.createElement("div");
    col2.className = "col-3";
    col2.id = id;
    const input2 = document.createElement("input");
    input2.className = "form-control";
    input2.type = "text";
    input2.placeholder = "Nombre Completo";
    col2.appendChild(input2);

    const btnDelete = document.createElement("button");
    btnDelete.id = id;
    btnDelete.className = "btn btnClose popover-test";
    btnDelete.onclick = (e) => deleteAttendees(e, id);
    btnDelete.textContent = "X";

    div.appendChild(col1);
    div.appendChild(col2);
    div.appendChild(btnDelete);
  };
  const deleteAttendees = (e, id) => {
    e.preventDefault();

    const algo = document.querySelectorAll("#" + id);
    for (let i = 0; i < algo.length; i++) {
      console.log(algo[i]);
      const div = document.getElementById("attendeesDiv");
      div.removeChild(algo[i]);
      // remove(algo[i]);
    }
  };
  const clean = (e) => {
    e.preventDefault();
    document.querySelector("#attendeesDiv").innerHTML = "";
  };

  return (
    <div
      className="modal fade"
      id="modalAttendees"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Lista de Asistentes
            </h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="modalAttendees">
              <div className="form-row" id="attendeesDiv0">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Completo"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row" id="attendeesDiv">
                {/* aqui agregamos lo nuevo */}
              </div>
            </form>
            <button
              className="btn btnAdd popover-test"
              onClick={(e) => addAttendees(e)}
            >
              +
            </button>
            <button
              className="btn btn-warning popover-test"
              onClick={(e) => clean(e)}
            >
              Limpiar
            </button>
            <button className="btnPlus" data-dismiss="modal">
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
