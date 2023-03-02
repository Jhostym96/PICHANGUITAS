import { height } from "@mui/system";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../image/assets/icons/project1.jpg"),
    altText: "Slide 1",
    //caption: "Slide 1",
    header: "Vive tu Pasiòn",
  },
  {
    src: require("../../image/assets/icons/project2.jpg"),
    altText: "Slide 2",
    //caption: "Slide 2",
    header: "Realiza tu Sueño",
  },
  {
    src: require("../../image/assets/icons/project3.jpg"),
    altText: "Slide 3",
    //caption: "Slide 3",
    header: "Demostrar de lo que Vales",
  },
];

const Example = () => (
  <UncontrolledCarousel
    items={items}
    style={{ width: "100%", height: "25%" }}
  />
);

export default Example;