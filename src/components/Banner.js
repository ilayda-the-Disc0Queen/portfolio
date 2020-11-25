import React from 'react';
import './Banner.css';
import Navbar from './Navbar';

const Banner = () => {
  return (
    <div className="image-banner">
      <div className="banner text container">
        <h1 className="banner text header">
          Ilayda Bakare
        </h1>
        <h2 className="banner text" >Fullstack developer</h2>
        <div className="banner ui huge primary button">Click me!</div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Banner;
