import React, { useEffect } from "react";
import { TimelineLite, Power3 } from "gsap";

import HeroImage from "./HeroImage";
// import heroImage from "./Hero_image.png";

import "./Hero.css";

const Hero = () => {
  let tl = new TimelineLite();
  useEffect(() => {
    tl.from(".hero-anim", { delay: 0.5, duration: 2, opacity: 0, y: 40, stagger: 0.3 });
  });
  return (
    <>
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero-anim">
              Front-End <br />
              Web Developer
            </h1>
            <p className="hero-anim">Hi, I'm Richard a Front-End Web Developer with a passion in creating applications with React and other Javascript technologies.</p>
            <div className="hero-anim">
              <button>View my work</button>
            </div>
          </div>
          <div className="hero__img">
            <HeroImage />
            {/* <img src={heroImage} alt="Developer" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
