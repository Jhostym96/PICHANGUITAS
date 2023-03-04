import { useContext, useEffect, useState } from "react";
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

  const { user } = useContext(AuthContext);

  const [stadium, setStadium] = useState(null);


  const todoslosEstadios = async () => {
  
  
      try {
        const token = user.token;
        const response = await fetch("http://localhost:5000/api/v1/fields",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
  
        setStadium(data?.fields);
  
      } catch (error) {
        console.error(error);
      }
    };
  

  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    todoslosEstadios();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    image={stadium?.img}
                    alt="green iguana"
                  />
                  <CardContent key={stadium?._id}>
                    <Typography gutterBottom variant="h5" component="div">
                      {stadium?.nameField}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={`/product/${stadium?._id}`} fullWidth variant="contained">
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

