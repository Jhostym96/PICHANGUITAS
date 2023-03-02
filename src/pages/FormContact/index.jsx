//PAGINA PARA EL FORMULARIO DEL CONTACTO


import "./formContact.css";

const formContact = () => {
  return (
<div className="container__Contact">
<section id="contact" className="contact section-padding">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contactanos</h2>
                <p>
                Te mostramos los beneficios de tener un canal online para gestionar tu club que permite a los usuarios reservar online.
                Dejanos tus datos de contacto así podemos ponernos en contacto contigo.
                </p>
              </div>
            </div>
          </div>
          <div className="formularioAll row">
            <div className="col-md-8 p-9 pb-9">
              <form action="#" className="bg-light">
                <div className="row">
                  <div className="col-md-11">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Nombres"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-11">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Apellidos"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-11">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="ejemplo@hotmail.com"
                        required=""
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-11">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Mensaje"
                        required=""
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning btn-lg btn-block mt-1"
                    type="button"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

</div>
    
  )
}

export default formContact;