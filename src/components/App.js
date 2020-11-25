import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Section from './Section';
import ImageCarousel from './Carousel';

const App = () => {
  return (
    <React.Fragment>
      <Banner/>
      <Section/>
      <ImageCarousel/>
    </React.Fragment>
  );
};

export default App;
