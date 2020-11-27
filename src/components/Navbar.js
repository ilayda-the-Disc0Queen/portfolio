import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <div className="ui three item menu inverted fixed top">
        <a className="item active">Home</a>
        <a className="item">Projects</a>
        <a className="item">Get in touch</a>
      </div>
  );
};

export default Navbar;
