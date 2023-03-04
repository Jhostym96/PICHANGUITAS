import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoProducto } from "../../services/funciones";

export default function StandardImageList() {
  const [stadium, setStadium] = useState({});

  const params = useParams();

  useEffect(() => {
    unicoProducto(params.id, setStadium);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const itemData = [
    {
      img: stadium.field?.img1,
      title: "Stadium?",
    },
    {
      img: stadium.field?.img2,
      title: "Burger",
    },
    {
      img: stadium.field?.img3,
      title: "Camera",
    },
    {
      img: stadium.field?.img4,
      title: "Coffee",
    },
    {
      img: stadium.field?.img5,
      title: "Hats",
    },
    {
      img: stadium.field?.img6,
      title: "Honey",
    },
    {
      img: stadium.field?.img7,
      title: "Basketball",
    },
    {
      img: stadium.field?.img8,
      title: "Fern",
    },
    {
      img: stadium.field?.img9,
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
      
    </>
  );
}
