import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/carosel-bike.jpg";
import banner2 from "../../../images/banner/feature-bike.jpg";
import banner3 from "../../../images/banner/header-bike.png";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-75" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-success">My favariute Bike</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-75" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-success">Motor cycle</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-75" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-success">glorius byecycle</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
