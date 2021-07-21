import React from "react";

const SuccessBooking = () => {
  return (
    <React.Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#SuccessBooking"
      >
        Agendar
      </button>

      <div
        class="modal fade"
        id="SuccessBooking"
        tabindex="-1"
        role="dialog"
        aria-labelledby="SuccessBookingTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Reserva Exitosa
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="SuccessBooking">
                <div className="form-row">
                  <div className="col">
                    <h6>Nombre</h6>
                  </div>
                  <div className="col">
                    <p>Luis Patria</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <h6>Fecha</h6>
                  </div>
                  <div className="col">
                    <p>30/08/2021</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <h6>Hora</h6>
                  </div>
                  <div className="col">
                    <p>08:00 - 10:00</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <h6>Oficina</h6>
                  </div>
                  <div className="col">
                    <p>G1</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <h6>Puesto</h6>
                  </div>
                  <div className="col">
                    <p>3</p>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Editar
              </button>
              <button type="button" class="btn btn-primary">
                Volver a agendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessBooking;
