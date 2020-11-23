import React from 'react';
import './Section.css';
import picture from '../images/dual_screens.jpg';

const Section = () => {
  // personal info and welcome ----------
  const infoSection = () => {
    return (
      <div className="ui middle aligned stackable grid container">
        {/* writing on left */}
        <div className="row centered">
          <div className="six wide column">
            <h3 className="ui header">Welcome to my portfolio!</h3>
            <p>Here you can find projects I have worked on and get in touch if you like!</p>
            <h3 className="ui header">
              Here\'s another line of text'
            </h3>
            <p>Saying some other stuff - wow how interesting!</p>
          </div>
          {/* image on the right */}
          <div className="six wide column">
            <img className="ui fluid image" src={picture} alt="my cute ass head"/>
          </div>
        </div>
      </div>
    );
  };

  const skillSection = () => {
    return (
    <div class="container">
      {/* header above skills */}
        <div className="row centered">
          <div className="one wide comlumn">
            <h3 className="ui center aligned medium header">Skills</h3>
          </div>
        </div>


        <div className="ui center aligned three column grid">
          <div className="row">
            <div className="column">
              <div className="ui vertical fluid menu">
                <div className="header item">
                  Functional coding
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui vertical fluid menu">
                <div className="header item">
                  OOP
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui vertical fluid menu">
                <div className="header item">
                  Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const quoteSection = () => {
    return <h1>this is where the quotes will go</h1>;
  };

  const websiteSection = () => {
    return <h2>this is where the website previews will go...</h2>;
  };

  return (
    <div className="ui container">
      <div className="ui vertical stripe" id="info">{infoSection()}</div>
      <div className="ui vertical stripe segment" id="skill">{skillSection()}</div>
      <div className="ui vertical stripe segment" id="quotes">{quoteSection()}</div>
      <div className="ui vertical stripe segment" id="website">{websiteSection()}</div>
    </div>
  );
};

export default Section;
