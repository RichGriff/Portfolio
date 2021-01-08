import React from "react";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import "./About.css";

import aboutMeImage from "../../images/about_me.png";

const About = () => {
  return (
    <>
      <div className="about__container">
        <h2 id="about">About Me</h2>
        <div className="about__wrapper">
          <div className="about__image">
            <img src={aboutMeImage} alt="" />
          </div>
          <div className="about__text">
            <p>I'm a Front_End Developer based in the UK, with a few years experience in creating interactive and engaging web applications</p>
            <p>Most of my experience so far has been leant towards front-end development, however I am eager to gain more knowledge and I am always learning!</p>
            <div className="about__links">
              <a href="#">
                <ImGithub />
              </a>
              <a href="#">
                <GrInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
