import React from 'react';
import './stylesheets/Navbar.scss';

const Navbar = () => {
  return (
      <div className="ui three item menu inverted fixed top">
        <a className="item active" href="/">Home</a>
        <a className="item" href="#projects">Projects</a>
        <a className="item">Get in touch</a>
      </div>
  );
};

export default Navbar;
