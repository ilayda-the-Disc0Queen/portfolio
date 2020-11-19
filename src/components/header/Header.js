import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <div className="ui vertical masthead center aligned segment">
      <div className="ui container">
        <div className="ui huge secondary pointing menu">
          <a className="item">Something</a>
          <a className="item">Something</a>
          <a className="item">Something else</a>
          <div className="right item">
            <div className="ui button">About me</div>
            <div className="ui button">Contact</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
