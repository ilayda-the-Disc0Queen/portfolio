import React from 'react';
import Banner from './Banner';
import Section from './Section';
import ImageCarousel from './ImageCarousel';

const App = () => {
  return (
    <React.Fragment>
      <Banner/>
      <Section/>
      <ImageCarousel> {/* need specify website name here */}
      </ImageCarousel>

    </React.Fragment>
  );
};

export default App;
