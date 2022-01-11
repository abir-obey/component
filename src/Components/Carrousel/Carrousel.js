import React from 'react'
import { Carousel} from 'react-bootstrap';
import shop from "./assets/Shop-In.jpg";
import clothes from "./assets/clothes.jpg";
import electronic from "./assets/electronic.jpg"

const CarrouselC = () => {
    return (
        <div>
     <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop}
      alt="Shop with us"
    />
    <Carousel.Caption>
      <h3>Shop with us</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={clothes}
      alt="New Brand"
    />

    <Carousel.Caption>
      <h3>New Brand</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={electronic}
      alt="Electronics"
    />

    <Carousel.Caption>
      <h3>Electronics</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarrouselC
