import React from "react";
// import PropTypes from "prop-types";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

const fadeImages = [
  {
    url: "./images/slider-1.png",
    caption: "First Slide",
  },
  {
    url: "./images/slider-1.png",
    caption: "Second Slide",
  },
  {
    url: "./images/slider-1.png",
    caption: "Third Slide",
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src="./images/slider-1.png" alt="aaa" />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

// Slider.propTypes = {};

// Slider.defaultProps = {};

export default Slider;
