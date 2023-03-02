import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import BeahAccessIcon from "@mui/icons-material/BeachAccess";
import AccessibleIcon from "@mui/icons-material/Accessible";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function ListElementsProducts() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SportsSoccerIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Balon profesional" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SportsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Arbitro Profesional" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeahAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Canchas techadas" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessibleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Acceso para discapacitados" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MusicNoteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Musica en todos los partidos" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SportsBarIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Barra de bebidas" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DirectionsCarIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Estacionamiento de autos" />
      </ListItem>
    </List>
  );
}
