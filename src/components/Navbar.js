import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar container ui inverted menu">
      <div className="ui three item menu">
        <a className="item active">Home</a>
        <a className="item">Projects</a>
        <a className="item">Get in touch</a>
      </div>
    </div>
  );
};

export default Navbar;

