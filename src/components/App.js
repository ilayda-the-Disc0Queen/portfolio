import React from 'react';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';
import './stylesheets/index.scss';



const App = () => {
  return (
    <React.Fragment>
      <Banner/>
      <Section/>
      <Footer/>
    </React.Fragment>
  );
};

export default App;
