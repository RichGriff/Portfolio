import React, { useRef, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { TweenLite, Power3 } from "gsap";

import HeroImage from "./HeroImage";

import "./Hero.css";

const Hero = () => {
  let heroHeader = useRef(null);
  let heroTagline = useRef(null);
  let heroCta = useRef(null);

  useEffect(() => {
    TweenLite.staggerFrom([heroHeader, heroTagline, heroCta], 1, { opacity: 0, y: 40, ease: Power3.easeOut }, 0.2);
  }, []);

  return (
    <>
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 ref={el => (heroHeader = el)}>
              Front-End <br />
              Web Developer
            </h1>
            <p ref={el => (heroTagline = el)}>Hi, I'm Richard a Front-End Web Developer with a passion in creating applications with React and other Javascript technologies.</p>
            <div ref={el => (heroCta = el)}>
              <LinkS className="hero__btn" activeClass="active" spy={true} smooth={true} duration={800} to="work">
                View my work
              </LinkS>
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
