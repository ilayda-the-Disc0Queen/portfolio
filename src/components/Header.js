import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="ui vertical masthead center aligned">
      <div className="ui huge secondary pointing menu">
        <a className="item">Something</a>
        <a className="item">Something</a>
        <a className="item">Something</a>
        <div className="right item">
          <div className="ui button">About me</div>
          <div className="ui button">Contact</div>
        </div>
      </div>
    </div>
  )
};

export default Header;
