import React from 'react';
import './stylesheets/Navbar.scss';
import { Route } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="ui three item menu inverted fixed top">


        <a className="item active" href="/">Home</a>
        <a className="item" href="#projects">Projects</a>
        <a className="item" href="#contact">Get in touch</a>
      </div>
  );
};

export default Navbar;

{/*
<Route exact path="/">

      </Route>
<Link to="/">Home</Link>
*/}
