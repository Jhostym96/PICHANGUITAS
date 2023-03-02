import {
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { height } from "@mui/system";
import { Link } from "react-router-dom";
import { DatePicker, ListElementsProducts } from "../../components";
import StandardImageList from "../../components/StandardImageList";
import StartsRating from "../../components/StartsRating";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoProducto } from "../../services/funciones";

const Products = () => {
  const [stadium, setStadium] = useState(null);

  const params = useParams();

  useEffect(() => {
    unicoProducto(params.id, setStadium);
  }, []);

  return (
    <>
      {stadium !== null ? (
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              {/* Image CARD */}
              <Card style={{ borderRadius: 30 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 1, height: 300, boxShadow: 1 }}
                  image={stadium.image}
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
                <Typography variant="h4">{stadium.name}⚽</Typography>
                <Typography>
                  Propio de : <span>{stadium.supplier}</span>{" "}
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
                      <DatePicker />
                    </Grid>
                  </Grid>
                </Box>
                <Link to={"/cart"}>
                  <Button variant="contained" fullWidth>
                    RESERVAR AHORA
                  </Button>
                </Link>
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
