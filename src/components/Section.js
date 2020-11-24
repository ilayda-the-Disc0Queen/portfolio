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
              {"Here's another line of text"}
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
      <div className="ui container">
      {/* header above skills */}
        <div className="row centered">
          <div className="one wide comlumn">
            <h3 className="ui center aligned medium header">Skills</h3>
          </div>
        </div>
        <div id="skills-container" className="ui center aligned three column grid">
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
                  Data Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const quoteSection = () => {
    return (
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">hi</div>
            <div className="column">hello</div>
          </div>
        </div>
      </div>
    );
  };

  const websiteSection = () => {
    return (
      <div className="ui text container">
        <div className="ui huge header centered">My projects</div>
          <div className="ui header">
            <h2>Exhibitz</h2>
            <p>Born from the frustration of having to jump between "What's on"
              pages of my favourite museums when friends and family came to visit,
              I pitched, helped build and presented my final project, Exhibitz,
              towards the end of Le Wagon's coding bootcamp in June. Now you can
              easily browse exhibits, heart them to add them to your favourites
              and send calendar invites to people in just a few clicks to make
              planning your trip as easy as can be!</p>
          </div>

      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="ui vertical stripe" id="info-box">{infoSection()}</div>
      <div className="ui vertical stripe segment" id="skill">{skillSection()}</div>
      <div className="ui vertical stripe segment" id="quote-box">{quoteSection()}</div>
      <div className="ui vertical stripe segment" id="website">{websiteSection()}</div>
    </React.Fragment>
  );
};

export default Section;
