import { useContext, useEffect, useState } from "react";
import { todoslosEstadios } from "../../services/funciones";
import { Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";



const MarketPlace = () => {

  const { user, isAuth } = useContext(AuthContext);


  console.log(Object.entries(user).length)

  const [stadium, setStadium] = useState(null);

  useEffect(() => {
    todoslosEstadios(setStadium);

  }, []);

  if (!isAuth()) return <Navigate to="/login" />;


  return (
    <>
      <Container>
        <Grid mt={10} container spacing={3}>
          {stadium !== null
            ? stadium.map((stadium) => (
              <Grid item xs={12} md={3} sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={stadium.image}
                    alt="green iguana"
                  />
                  <CardContent key={stadium.id}>
                    <Typography gutterBottom variant="h5" component="div">
                      {stadium.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={`/product/${stadium.id}`} fullWidth variant="contained">
                      Reservar <AccessTimeIcon style={{ marginLeft: 10 }} />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
            : "no hay datos"}
        </Grid>
      </Container>
    </>
  );
};

export default MarketPlace;

