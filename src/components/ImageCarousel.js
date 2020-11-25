import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture from '../images/dual_screens.jpg';
import websiteConfig from './CarouselDetail';

const ImageCarousel = (props) => {
  const site = props.website
  console.log(site)
  const { websiteName, text, slide1, slide2, slide3 } = websiteConfig[site];


  return (
    <Carousel className="{site}">
      <Carousel.Item>
        <img className="ui fluid image"
          src={slide1.image}
          alt={slide1.alt}/>
        <Carousel.Caption>
          <h3>{slide1.header}</h3>
          <p>{slide1.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ui fluid image"
          src={slide2.image}
          alt={slide2.alt}/>
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3.image}
          alt={slide3.alt}/>
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
