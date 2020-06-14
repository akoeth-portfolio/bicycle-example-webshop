import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img_1 from "../../img/carousel/img_1.jpg";
import img_2 from "../../img/carousel/img_2.jpg";
import img_3 from "../../img/carousel/img_3.jpg";

const Landing = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img_1} alt="First slide" />
        <Carousel.Caption>
          <h3>This is just a likkle test</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img_2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img_3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;