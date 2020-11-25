import Carousel from 'react-bootstrap/Carousel';
import picture from '../images/dual_screens.jpg';

const carouselConfig = {
  // Exhibitz info
  exhibitz: {
    websiteName: "Exhibitz",
    text: "temporary museum exhibits (pre-corona) in one place!",
    firstSlide: {
      image: {picture},
      caption: "first slide",
      alt: "this is the first screenshot"
    },
    secondSlide: {
      image: {picture},
      caption: "second slide",
      alt: "this is the second screenshot"
    },
    thirdSlide: {
      image: {picture},
      caption: "third slide",
      alt: "this is the third screenshot"
    }
  },
  // Boatz info
  boatz: {
    websiteName: "Boatz",
    text: "Rent a boat!",
    firstSlide: {
      image: {picture},
      caption: "first slide",
      alt: "this is the first screenshot"
    },
    secondSlide: {
      image: {picture},
      caption: "second slide",
      alt: "this is the second screenshot"
    },
    thirdSlide: {
      image: {picture},
      caption: "third slide",
      alt: "this is the third screenshot"
    }
  }
};


const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picture}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
