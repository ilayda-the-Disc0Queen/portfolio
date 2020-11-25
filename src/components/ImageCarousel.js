import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture from '../images/dual_screens.jpg';
import { exhibitz, boatz } from './CarouselDetail';

const ImageCarousel = (props) => {
  console.log(exhibitz)
  return (
    <Carousel >
      <Carousel.Item>
        <img className="ui fluid image"
          src={exhibitz.slide1.image}
          alt={exhibitz.slide1.alt}/>
        <Carousel.Caption>
          <h3>{exhibitz.slide1.header}</h3>
          <p>{exhibitz.slide1.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ui fluid image"
          src={exhibitz.slide2.image}
          alt={exhibitz.slide2.alt}/>
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exhibitz.slide3.image}
          alt={exhibitz.slide3.alt}/>
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
