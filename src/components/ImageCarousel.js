import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import websiteConfig from './CarouselDetail';

const ImageCarousel = (props) => {
  const site = props.website
  const { slide1, slide2, slide3 } = websiteConfig[site];

  return (
    <Carousel id="{site}">
      <Carousel.Item >
        <img className="ui fluid image"
          src={slide1.image}
          alt={slide1.alt}/>
          {/* <Carousel.Caption>
          <h3>{slide1.header}</h3>
          <p>{slide1.caption}</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ui fluid image"
          src={slide2.image}
          alt={slide2.alt}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ui fluid image"
          src={slide3.image}
          alt={slide3.alt}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
