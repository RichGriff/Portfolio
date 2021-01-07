import React from "react";

import heroImage from "./Hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1>
              Front-End <br />
              Web Developer
            </h1>
            <p>Hi, I'm Richard a Front-End Web Developer with a passion in creating applications with React and other Javascript technologies.</p>
            <button>View my work</button>
          </div>
          <div className="hero__img">
            <img src={heroImage} alt="Developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
