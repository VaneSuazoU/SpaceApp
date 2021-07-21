import React from "react";

const Attendees = () => {

  const addAttendees = (e) => {
    e.preventDefault();
    
  };
  const deleteAttendees = (e) => {
    e.preventDefault();
  }

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
                <button className="btn btnClose popover-test" onClick={(e)=>deleteAttendees(e)} >X</button>
              </div>
              <button className="btn btnAdd popover-test" onClick={(e)=>addAttendees(e)}>+</button>
              <button className="btnPlus" data-dismiss="modal">
                Listo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
