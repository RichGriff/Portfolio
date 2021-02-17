import React from "react";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import "./About.css";

import aboutMeImage from "../../images/about_me2.jpg";

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
            <p>An experienced and creative web developer with over 3 years’ experience working on a variety of exciting projects. Keen problem solver with a passion for innovative and fresh ideas. Relish the opportunity to learn the latest technologies and how these can be applied to future projects that I work on. Enjoy collaborating with others and sharing knowledge.</p>
            {/* <p>I'm a Front_End Developer based in the UK, with a few years experience in creating interactive and engaging web applications</p>
            <p>Most of my experience so far has been leant towards front-end development, however I am eager to gain more knowledge and I am always learning!</p> */}
            <div className="about__links">
              <a href="https://github.com/RichGriff" target="_blank" rel="noreferrer">
                <ImGithub />
              </a>
              <a href="https://www.instagram.com/r1chgriffiths/" target="_blank" rel="noreferrer">
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
