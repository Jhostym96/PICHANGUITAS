import React from "react";
import { Carrousel } from "../../components";
import project1 from "../../image/assets/icons/project1.jpg";
import project2 from "../../image/assets/icons/project2.jpg";
import project3 from "../../image/assets/icons/project3.jpg";
import team1 from "../../image/assets/icons/team1.jpg";
import team2 from "../../image/assets/icons/team2.png";
import team3 from "../../image/assets/icons/team3.png";
import team4 from "../../image/assets/icons/team4.png";
import cumpleaños from "../../image/assets/icons/cumpleaños.jpg";
import liga from "../../image/assets/icons/liga.jpg";
import academia from "../../image/assets/icons/academia.jpg";
import cancha from "../../image/assets/icons/cancha.JPG";
//import "../LandingPage/LandingPage.css";



function LandingPage() {
  return (
    <div>
      <div>
        <Carrousel />
      </div>
      <section id="about" className="about section-padding">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
              <br/>
              <br/>
                <img  src={cancha} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  Bienvenido a Deportivo Ex Alumnos
                </h2>
                <p>
                Nuestro complejo deportivo cuenta con 10 canchas de pasto sintetico de ultima generacion, calidad FIFA  que cumple con los estandares de calidad y resistencia para un juego seguro y confortable. Asu vez, tambien cuenta con 3 camchas de futbol de las mismas caracteristicas, toda el area de juego esta cubierta con iluminacion para estadios, contamos con camarines, duchas , baños y arriendo de balones y petos.  
                </p>
                <br/>
                <a href="#" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-padding" id="Servicios">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pt-5">
                <h2>Nuestros Servicios</h2>
                <p>
                  Te damos el conocimiento para que no tengas dudas en nuestros servicios
                </p>
                <br/>
                <br/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop"></i>
                  <h3 className="card-title">Registrarse en la Pagina Web</h3>
                  <p className="lead">
                   <br/>  
                  Para registrarte en la web de Campeonato Ex Alumnos , debes iniciar sesión con una red social
                  , como también puedras ingresar con tu celular.
                  ya que esto nos permitira guardar los datos registrados y podra relizar sus reservas al centro deportivo.
                  <br/>
                  <br/>
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-journal"></i>
                  <h3 className="card-title">Reserva tu cancha</h3>
                  <p className="lead">
                  <br/>
                  Para reservar una cancha solo debes ingresar una zona, la fecha y la
                  hora de tu elección, así podrás ver la disponibilidad . Luego, dependiendo del centro
                  deportivo, deberás pagar con cualquier medio de pago (crédito o débito). Podrás
                  encontrar canchas de fútbol, que estén disponibles en la plataforma.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-intersect"></i>
                  <h3 className="card-title">Cancelar reserva</h3>
                  <p className="lead">
                  <br/>
                  La cancelación dependerá de la política del centro deportivo, siempre la sabrás antes de reservar, ya que nosotros te informamos antes de procesar el pago; Caso de lluvia o incidencia,podrás contactar directamente con nosotros para gestionar la devolución de casos que corresponda.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Proyectos" className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pt-5">
                <h2>Nuestros Proyectos</h2>
                <p>
                  Como proyectos para ustedes, le damos información respecto dichos anuncios para que puedan contactarnos con nosotros
                </p>
                <br/>
                <br/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={cumpleaños} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">Usa el club para cumpleaños</h3>
                  <p className="lead">
                  Para obtener información sobre alquileres por cumpleaños te invitamos a comunicarte directamente con el complejo en donde quieres hacer la reserva. Nosotros no podemos ofrecerte una respuesta sobre el tema
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={liga} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">Ligas de futbol</h3>
                  <p className="lead">
                  <br/>
                    Las canchas estan listas para ser usadas por partes de empresas o barrios para realizar tu propia Liga de futbol.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </p>
                  <button className="btn bg-warning text-dark">
                    learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={academia} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">Academia de fùtbol</h3>
                  <p className="lead">
                  <br/>
                    Por que no utilizar las canchas para uso de academias ya sea de verano y podras estar mas comodo por el espacio y la calidad de las canchas.
                    <br/>
                    <br/>
                    <br/>
                    
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section-padding" id="Nosotros">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pt-5">
                <h2>Nosotros</h2>
                <p>
                  Lo siguiente vera los integrantes que realizaron este sitio web para ustedes.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img width={800}
                    src={team1}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Diego Castro</h3>
                  <p className="card-text">
                    Hola estoy feliz de aver realizado la pagina web para su propia comodidad , ya tambien soy fanatico en el futbol, espero que les guste nuestro proyecto.
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img width={195}
                    src={team2}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jhostym Rosas</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img width={600}
                    src={team3}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Arnold Gallegos</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img width={600}
                    src={team4}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
