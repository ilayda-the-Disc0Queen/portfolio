import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="contact" className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui large header centered inverted">
          Get in touch!
        </div>
        <div className="ui center aligned grid stackable">
          <div className="three column row">
              <div className="column">
                <div className="ui segment inverted">
                  <BrowserRouter>
                    <Link to={{ pathname: "https://github.com/ilayda-the-Disc0Queen" }} target="_blank" className="img-hover" rel="noreferrer">
                      <i className="github link icon big centered">
                      </i>
                      <h5>@ilayda-the-Disc0Queen</h5>
                    </Link>
                  </BrowserRouter>
                </div>
              </div>
              <div className="column">
                <i className="envelope outline icon big"></i>
                <h5>ilayda.bakare@gmail.com</h5>
              </div>
              <div className="column">
                <BrowserRouter>
                  <Link to={{ pathname: "https://www.linkedin.com/in/ilayda-bakare/" }} target="_blank" rel="noreferrer">
                    <i className="linkedin icon link big"></i>
                    <h5>ilayda-bakare</h5>
                  </Link>
                </BrowserRouter>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
