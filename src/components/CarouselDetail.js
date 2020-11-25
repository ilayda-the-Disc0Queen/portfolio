// import React from 'react';
import picture from '../images/dual_screens.jpg';
import screenshot from '../images/exhibitz1.png';

  // console.log(props)

const exhibitz = {
  websiteName: "Exhibitz",
  text: "temporary museum exhibits (pre-corona) in one place!",
  slide1: {
    image: screenshot,
    caption: "first slide",
    alt: "this is the first screenshot"
  },
  slide2: {
    image: picture,
    caption: "second slide",
    alt: "this is the second screenshot"
  },
  slide3: {
    image: picture,
    caption: "third slide",
    alt: "this is the third screenshot"
  }
};

  const boatz = {
  // Boatz info
    websiteName: "Boatz",
    text: "Rent a boat!",
    slide1: {
      image: picture,
      caption: "first slide",
      alt: "this is the first screenshot"
    },
    slide2: {
      image: picture,
      caption: "second slide",
      alt: "this is the second screenshot"
    },
    slide3: {
      image: picture,
      caption: "third slide",
      alt: "this is the third screenshot"
    }
  }

export {
  exhibitz,
  boatz,
}
