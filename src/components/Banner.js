import React from 'react';
import './Banner.css';
import dual_screens from '../images/dual_screens.jpg';

const Banner = () => {
  return (
    <img
      className="ui fluid image"
      src={dual_screens}
      alt="2 computer monitors with plants">
    </img>
  );
};

export default Banner;
