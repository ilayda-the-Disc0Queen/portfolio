import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture from '../images/dual_screens.jpg';
import { exhibitz, boatz } from './CarouselDetail';

const ImageCarousel = (props) => {
  console.log(exhibitz)
  return (
    <Carousel>
      <Carousel.Item>
        {/* CAROUSEL IMAGE
        <img
          className="d-block w-100"
          src={picture}
          alt="First slide"
        />

        props.children.image1
        */}


        <img src={exhibitz.slide1.image}/>
        <Carousel.Caption>
        {/* IMAGE CAPTION
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          props.children.caption1
          */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picture}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picture}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
