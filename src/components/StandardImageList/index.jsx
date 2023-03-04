import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { unicoProducto } from "../../services/funciones";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function StandardImageList() {

  const { user } = useContext(AuthContext);

  const [stadium, setStadium] = useState({});
  
  const params = useParams();

  const unicoProducto = async (id) => {
  
      try {
        const token = user.token;
        const response = await fetch(`http://localhost:5000/api/v1/fields/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
  
        setStadium(data?.field);

        console.log(data.field)
  
      } catch (error) {
        console.error(error);
      }
    };



  useEffect(() => {
    unicoProducto(params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(stadium["img1"]);

  const itemData = [
    {
      img: stadium.img1,
      title: "Stadium",
    },
    {
      img: stadium.img2,
      title: "Burger",
    },
    {
      img: stadium.img3,
      title: "Camera",
    },
    {
      img: stadium.img4,
      title: "Coffee",
    },
    {
      img: stadium.img5,
      title: "Hats",
    },
    {
      img: stadium.img6,
      title: "Honey",
    },
    {
      img: stadium.img7,
      title: "Basketball",
    },
    {
      img: stadium.img8,
      title: "Fern",
    },
    {
      img: stadium.img9,
      title: "Mushrooms",
    },
  ];

  return (
    <>
      <Typography align="center" variant="h5">
        📸Galeria de Imagenes📷
      </Typography>
      <ImageList
        sx={{
          height: 1,
          width: 1,
          maxHeight: { xs: 1, md: 1 },
          maxWidth: { xs: 1, md: 1 },
        }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              style={{ borderRadius: 7 }}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>


      {/* <Grid container>
        <Grid item sx={12} md={6}>
          <Box component="img"
        </Grid>
        <Grid item sx={12} md={6}>
          asd
        </Grid>
        <Grid item sx={12} md={4}>
          asd
        </Grid>
        <Grid item sx={12} md={8}>
          asd
        </Grid>
      </Grid> */}
    </>
  );
}
