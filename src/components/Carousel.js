import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FristPhoto from "../components/assestent/floor_one.jpg";
import SecoPhoto from "../components/assestent/floor_tow.jpg";
import therdPhoto from "../components/assestent/floor_three.jpg";
export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={FristPhoto}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={SecoPhoto}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={therdPhoto}
        alt="..."
      />
    </MDBCarousel>
  );
}
