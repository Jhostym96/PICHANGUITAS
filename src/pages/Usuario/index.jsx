import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Usuario.css';

const UserPage = () => {
  const { user } = useContext(AuthContext);

  const [dataUser, setDataUser] = useState([]);
  const [reserPasad, setReserPasad] = useState([]);
  const [reserFut, setReserFut] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showTableFut, setShowTableFut] = useState(false);


  // llamas a la función para hacer la petición GET

  useEffect(() => {
    obtenerDatos();
    obtenerReservasPasadas();
    obtenerReservasFuturas();
  }, []);

  const obtenerDatos = async () => {
    const token = user.token;
    const id = user._id;
    const response = await fetch(
      `http://localhost:5000/api/v1/auth/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setDataUser(data.user);
  };

  const obtenerReservasPasadas = async () => {
    const token = user.token;
    const response = await fetch(
      'http://localhost:5000/api/v1/historial/past/',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const dataFinal = data?.reservasPasadas;
    setReserPasad(dataFinal);
  };

  const obtenerReservasFuturas = async () => {
    const token = user.token;
    const response = await fetch(
      'http://localhost:5000/api/v1/historial/futuro/',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const dataFinal = data?.reservasFuturas;
    setReserFut(dataFinal);
  };
  const handleClick = () => {
    setShowTable(true);
    setShowTableFut(false);
  };

  const handleClickFut = () => {
    setShowTable(false);
    setShowTableFut(true);
  };
  return (
    <section className='bg-light'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10 mt-5 pt-5'>
            <div className='row z-depth-3'>
              <div className='col-sm-4 bg-info rounded-left'>
                <div className='card-block text-center text-white'>
                  <i className='fas fa-user-tie fa-7x mt-5'></i>

                  <p>Usuario</p>
                  <i className='far fa-edit fa-2x mb-4'></i>
                </div>
              </div>
              <div className='col-sm-8 bg-white rounded-right'>
                <h3 className='mt-3 text-center'>Datos Personales</h3>
                <hr className='badge-primary mt-0 w-35' />
                <div className='row align-items-start'>
                  <div className='col'>
                    <p className='font-weight-bold'>Nombre:</p>
                    <h6 className='text-muted'>{dataUser?.name}</h6>
                  </div>
                  <div className='col'>
                    <p className='font-weight-bold'>Apellidos:</p>
                    <h6 className='text-muted'>Senior</h6>
                  </div>
                  <div className='col'>
                    <p className='font-weight-bold'>celular:</p>
                    <h6 className='text-muted'>962458675</h6>
                  </div>

                  <div className='row align-items-end'></div>

                  <div className='col'>
                    <p className='font-weight-bold'>Usuario:</p>
                    <h6 className='text-muted'>Nixon@gmail.com</h6>
                  </div>
                </div>
              </div>
              <h3 className='mt-3'>Historial</h3>
              <div className='col-sm-12'>
                <div>
                  <hr className='bg-primary' />
                  <ul className='list-unstyled d-flex justify-content-start mt-4'>
                    <button
                      type='button'
                      className='btn btn-success btn-lg'
                      onClick={handleClick}
                    >
                      Reservas Pasadas
                    </button>
                    <button
                      type='button'
                      className='btn btn-warning btn.lg'
                      onClick={handleClickFut}
                    >
                      Reservas Futuras
                    </button>
                  </ul>
                </div>
              </div>
              {/* Table Begins */}
              <div className='col-sm-12'>
                {showTable && (
                  <div className='col-sm-12'>
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th scope='col'>#</th>
                          <th scope='col'>Cancha</th>
                          <th scope='col'>Fecha de la Reserva</th>
                          <th scope='col'>Hora Inicio</th>
                          <th scope='col'>Hora Fin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reserPasad.map((val, index) => (
                          <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>Cancha</td>
                            <td>
                              {new Date(val?.fecha_reserva).toLocaleDateString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                            <td>
                              {new Date(val?.hora_inicio).toLocaleTimeString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                            <td>
                              {new Date(val?.hora_fin).toLocaleTimeString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {showTableFut && (
                  <div className='col-sm-12'>
                    <table class='table table-striped'>
                      <thead>
                        <tr>
                          <th scope='col'>#</th>
                          <th scope='col'>Cancha</th>
                          <th scope='col'>Fecha de la Reserva</th>
                          <th scope='col'>Hora Inicio</th>
                          <th scope='col'>Hora Fin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reserFut.map((val, index) => (
                          <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>Cancha</td>
                            <td>
                              {new Date(val?.fecha_reserva).toLocaleDateString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                            <td>
                              {new Date(val?.hora_inicio).toLocaleTimeString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                            <td>
                              {new Date(val?.hora_fin).toLocaleTimeString(
                                'es-ES',
                                {
                                  timeZone: 'UTC',
                                }
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;