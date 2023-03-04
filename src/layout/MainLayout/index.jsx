import { useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../image/Logotipo.png";
import "./index.css";
const MainLayout = () => {

  const { user, logout } = useContext(AuthContext);


  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#152059" }}
      >
        <div className="container">
          <div>
            <img
              style={{ height: "50px", width: "50px", marginRight: "10px" }}
              src={logo}
              alt=""
            />
            <Link className="navbar-brand" to={"/"}>
              <span className="text-success">Aquila tu</span> CANCHA
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "flex-end" }}
          >


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



              <li className="nav-item">
                <a className="nav-link" href="/#" hidden={user.email}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#Servicios" hidden={user.email}>
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Proyectos" hidden={user.email}>
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Nosotros" hidden={user.email}>
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Contactos" hidden={user.email}>
                  Contactos
                </a>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to={"/login"} hidden={user.email}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/market"} hidden={!user.email}>
                  Canchas
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" onClick={logout} hidden={!user.email}>
                  Cerrar sesion
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* FOOTER de aqui */}
      <footer id="Contactanos" className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img src={logo} alt="Logo" />
              </a>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ipsa?
            </p>
            {/* DIEGO AGREGO EL BOTON LINK PARA EL FORMULARIO  */}
            <Link to="/FormContact" className="my-3 btn btn-link">
              CONTACTANOS CON NOSOTROS!
            </Link>
          </div>
          <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-youtube"></a>
            </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>
            &copy; 2022 <b>Campeonato Ex Alumnos</b> - Todos los Derechos
            Reservados.
          </small>
        </div>
      </footer>
      {/* Hasta aqui */}
    </div>
  );
};

export default MainLayout;
