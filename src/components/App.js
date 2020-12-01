import React from 'react';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';
import './stylesheets/_index.scss';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Banner/>
        <Section/>
        <Footer/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
