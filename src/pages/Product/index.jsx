import {
  Container,
  Box,
  Card,
  Grid,
  Button,
  Typography,
  CardMedia,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DatePicker, ListElementsProducts } from "../../components";
import StandardImageList from "../../components/StandardImageList";
import StartsRating from "../../components/StartsRating";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoProducto } from "../../services/funciones";

import { post } from "../../services/requests";
import Swal from "sweetalert2";


const Products = () => {
  const [stadium, setStadium] = useState(null);

  const params = useParams();

  const [values, setValues] = useState(
    ''
  );

  const [fecha, setFecha] = useState(null);



  const handleInputChange = (e) => {

 

    // const { name, value } = e.target;
    // setValues({
    //   ...values,
    //   [name]: value,
    // });

    console.log(DatePicker)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post("reservas", values);

    console.log(data.hora_fin)

    if (data) {
      Swal.fire({
        icon: "success",
        text: "Reserva creada correctamente",
      });

      setValues({
        hora_fin: "",
      });

    } else {

      Swal.fire({
        icon: "error",
        text: data.error,
      });

      Swal.fire({
        icon: "error",
        text: data.errors[0].msg,
      });
    }
  };



  useEffect(() => {
    unicoProducto(params.id, setStadium);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {stadium !== null ? (
        <Container onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              {/* Image CARD */}
              <Card style={{ borderRadius: 30 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 1, height: 300, boxShadow: 1 }}
                  image={stadium.field?.img}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card style={{ padding: 10 }}>
                <StandardImageList />
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card style={{ padding: 10 }}>
                <Typography variant="h4">{stadium.field?.nameField}⚽</Typography>
                <Typography>
                  Propio de : <span>{stadium.field?.uid}</span>{" "}
                </Typography>
                {/* Calificacion de Estrellas */}
                <StartsRating />
                <Typography mt={2} variant="h5">
                  Descripcion
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores cum quidem saepe, quo tenetur praesentium ratione
                  assumenda et exercitationem nostrum rem suscipit ab expedita,
                  eum repellendus. Eum eos placeat molestias.quidem saepe, quo
                  tenetur praesentium ratione assumenda et exercitationem
                  nostrum rem suscipit ab expedita, eum repellendus. Eum eos
                  placeat molestias.
                </Typography>
                <Box mt={1.5} mb={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography variant={"h6"}>
                        Selecciona tu fecha de reserva
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      {/* <DatePicker value={values.hora_inicio} onChange={handleInputChange} /> */}
                      <br />
                      <DatePicker />
                    </Grid>

                  </Grid>
                </Box>
                {/* <Link to={"/cart"}> */}
                <Button onClick={handleInputChange} variant="contained" fullWidth>
                  RESERVAR AHORA
                </Button>
                {/* </Link> */}
              </Card>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Card style={{ padding: 10 }}>
                  <Typography variant="h4" center>
                    ⚽Lo mejor de esta cancha⚽
                  </Typography>
                  <ListElementsProducts />
                </Card>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card style={{ padding: 10, height: 550 }}>
                  <div style={{ width: "100%", height: 535, borderRadius: 15 }}>
                    <iframe
                      style={{
                        width: "100%",
                        height: "100%",
                        frameborder: "0",
                        scrolling: "no",
                        marginheight: "0",
                        marginwidth: "0",
                        borderRadius: 15,
                      }}
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20de%20Concha%20Espina+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/car-satnav-gps/">
                        GPS car tracker
                      </a>
                    </iframe>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      ) : (
        "no hay stadio"
      )}
    </>
  );
};

export default Products;
