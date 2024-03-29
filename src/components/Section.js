import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './stylesheets/_Section.scss';
import portrait from '../images/waist_up.png';
import ImageCarousel from './ImageCarousel';

const Section = () => {
  // personal info and welcome ----------
  const infoSection = () => {
    return (
      <div className="ui middle aligned stackable grid container">
        {/* writing on left */}
        <div className="row centered">
          <div className="six wide column">
            <h2 id="welcome-header" className="ui header">Welcome!</h2>
            <h3 className="ui centered large header">About me</h3>
            <p>Pleased to meet you! My name is Ilayda and I first got involved with coding at
            university whilst taking a module called Numerical Analysis with Computation.
             Then I worked for a tech startup learning Functional Programming
             on the job (Clojure) and working as a Data Analyst. Next, I enrolled in Le Wagon's
             intensive coding bootcamp to better learn the foundations of fullstack
             web development. Since graduating in the summer I have switched my
             focus from Ruby-on-Rails to learning React and Redux!
            </p>
            <p className="ui centered medium header">Check out some of my work below!</p>
          </div>
          {/* image on the right */}
          <div className="six wide column">
            <img id="portrait" className="ui fluid image rounded centered" src={portrait} alt="Ilayda in a Le Wagon t-shirt"/>
          </div>
        </div>
      </div>
    );
  };

  const skillSection = () => {
    return (
      <div className="ui container">
      {/* header above skills */}
        <h3 className="ui center aligned medium header">Skills</h3>
        <div id="skills-container" className="ui center aligned three column grid stackable">
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

  // eslint-disable-next-line no-lone-blocks
  {/*  const quoteSection = () => {
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
  }; */}

   const projectsSection = () => {
    return (
        <div className="ui text container">
          <div className="ui huge header centered">My projects</div>
            <div style={{margin: "20px 0"}} className="ui header">
              <h2>StreetNYE</h2>
              <p className="subheader">Red pill or blue pill?</p>
            </div>
            <BrowserRouter>
              <Link to={{ pathname: "https://streetnye.party" }} target="_blank" className="img-hover" rel="noreferrer">
                <ImageCarousel website="streetNYE"/>
              </Link>
            </BrowserRouter>
            <p className="description">
              I organised a Matrix themed NYE party for my Street Dance friends
               and built an app so all the logistical details were in one place.
            </p>
        
            <div className="ui header">

              <div style={{margin: "20px 0"}} className="ui header">
                <h2>Fifteen Days of Lockdown</h2>
                <p className="subheader">A digital exhibition by Charlotte Holme</p>
              </div>
              <BrowserRouter>
                <Link to={{ pathname: "https://15daysoflockdown.site/" }} target="_blank" className="img-hover" rel="noreferrer">
                  <ImageCarousel website="lockdown"/>
                </Link>
              </BrowserRouter>
              <p className="description">This digital exhibition showcases the work of artist Charlotte
               Holme and includes a time-lapse animation, images and audio, all
               captured within the same 15 days during the lockdown period.
              </p>

              <div style={{margin: "20px 0"}} className="ui header">
                <h2>Exhibitz</h2>
                <p className="subheader">Exhibitz is THE place to find all temporary museum exhibits
                 in one place! </p>
              </div>
              <BrowserRouter>
                <Link to={{ pathname: "http://www.exhibitz.co.uk/" }} target="_blank" className="img-hover" rel="noreferrer">
                  <ImageCarousel website="exhibitz"/>
                </Link>
              </BrowserRouter>
              <p className="description">Born from the frustration of having to jump between "What's on"
                pages of my favourite museums when friends and family came to visit,
                I pitched, helped build and presented my final project, Exhibitz,
                towards the end of Le Wagon's coding bootcamp in June. Now you can
                easily browse exhibits, heart them to add them to your favourites
                and send calendar invites to people in just a few clicks to make
                planning your trip as easy as can be!
              </p>

            <div style={{margin: "20px 0"}} className="ui header">
              <h2>Boatz</h2>
              <p className="subheader">My first website made during Le Wagon's coding bootcamp!</p>
            </div>
            <BrowserRouter>
              <Link to={{ pathname: "https://boatz-388.herokuapp.com/" }} target="_blank" className="img-hover" rel="noreferrer">
                <ImageCarousel website="boatz"/>
              </Link>
            </BrowserRouter>
            <p className="description">Tasked with making a website similar to Airbnb, instead
            of renting appartments, my team and I chose to rent boats! The aim
            was to make a platform where users could upload their own conent (boats
              available for rent) and manage their bookings etc.
            </p>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="ui vertical stripe" id="info-box">{infoSection()}</div>
      <div className="ui vertical stripe segment" id="skill">{skillSection()}</div>
      {/* <div className="ui vertical stripe segment" id="quote-box">{quoteSection()}</div> */}
      <div className="ui vertical stripe" id="projects">{projectsSection()}</div>
    </React.Fragment>
  );
};

export default Section;
