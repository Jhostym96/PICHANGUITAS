import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function StartsRating() {
  const [value, setValue] = useState(3);

  return (
    <Box
      sx={{
        "& > legend": { mt:2 },
      }}
    >
      <Typography component="legend" variant="h5">Calificacion</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export default StartsRating;
