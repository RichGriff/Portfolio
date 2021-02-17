import React, { useRef, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { gsap, TweenLite, Power3 } from "gsap";

import HeroImage from "./HeroImage";

import "./Hero.css";

const Hero = () => {
  gsap.registerPlugin(TweenLite);
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
            <p ref={el => (heroTagline = el)}>Hi, I'm Richard</p>
            <h1 ref={el => (heroHeader = el)}>
              Front-End <br />
              Web Developer
            </h1>
            <p ref={el => (heroTagline = el)}>with a passion for creating web applications with React, Based in Wales, UK</p>
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
