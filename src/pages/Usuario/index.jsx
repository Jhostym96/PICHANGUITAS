/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Usuario.css";



const UserPage = () => {

    const { user } = useContext(AuthContext);


    const [account, setAccount] = useState({
        name: "",
    });


    // función para hacer la petición GET
    const getUser = async (setAccount) => {
        try {
          const token = user.token;
          const id = user._id;
          const response = await fetch(`http://localhost:5000/api/v1/auth/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
      
          setAccount(data);
        } catch (error) {
          console.error(error);
        }
      };
    // llamas a la función para hacer la petición GET
    
    useEffect(() => {
        getUser(setAccount);
      }, []);


    return (
        <section className="bg-light">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 mt-5 pt-5">
                        <div className="row z-depth-3">
                            <div className="col-sm-4 bg-info rounded-left">

                                <div className="card-block text-center text-white">
                                    <i className="fas fa-user-tie fa-7x mt-5"></i>

                                    <p>Usuario</p>
                                    <i className="far fa-edit fa-2x mb-4"></i>
                                </div>
                            </div>
                            <div className="col-sm-8 bg-white rounded-right">
                                <h3 className="mt-3 text-center">Datos Personales</h3>
                                <hr className="badge-primary mt-0 w-35" />
                                <div className="row align-items-start">
                                    <div className="col">
                                        <p className="font-weight-bold">Nombre:</p>
                                        <h6 className="text-muted">{account.name}</h6>
                                    </div>
                                    <div className="col">
                                        <p className="font-weight-bold">Apellidos:</p>
                                        <h6 className="text-muted">Senior</h6>
                                    </div>
                                    <div className="col">
                                        <p className="font-weight-bold">celular:</p>
                                        <h6 className="text-muted">962458675</h6>
                                    </div>

                                    <div className="row align-items-end"></div>

                                    <div className="col">
                                        <p className="font-weight-bold">Usuario:</p>
                                        <h6 className="text-muted">Nixon@gmail.com</h6>
                                    </div>
                                </div>


                            </div>
                            <h3 className="mt-3">Historial</h3>
                            <div className="row">

                                <div>
                                    <hr className="bg-primary" />
                                    <ul className="list-unstyled d-flex justify-content-start mt-4">
                                        <button type="button" className="btn btn-success btn-lg">Reservas Pasadas</button>
                                        <button type="button" className="btn btn-warning btn.lg">Reservas Pendientes</button>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserPage;