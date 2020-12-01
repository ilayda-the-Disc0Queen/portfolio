import React from 'react';
import './stylesheets/Navbar.scss';


const Navbar = () => {
  return (
      <div className="ui three item menu inverted fixed top">
        <a className="item" href="#/">Home</a>
        <a className="item" href="#projects">Projects</a>
        <a className="item" href="#contact">Get in touch</a>
      </div>
  );
};

export default Navbar;
