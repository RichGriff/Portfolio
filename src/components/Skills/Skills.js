import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills__container">
        <h2 id="skills">Skill-Set</h2>
        <div className="skills__wrapper">
          <div className="skills__group">
            <h3 className="skills__group__heading">Languages</h3>
            <ul>
              <li className="skills__group__item">JavaScript</li>
              <li className="skills__group__item">CSS / SCSS</li>
              <li className="skills__group__item">HTML5</li>
              <li className="skills__group__item">SQL</li>
            </ul>
          </div>
          <div className="skills__group">
            <h3 className="skills__group__heading">Frameworks</h3>
            <ul>
              <li className="skills__group__item">React</li>
              <li className="skills__group__item">Node.js</li>
              <li className="skills__group__item">Express</li>
              <li className="skills__group__item">Mongo DB</li>
              <li className="skills__group__item">Gatsby</li>
            </ul>
          </div>
          <div className="skills__group">
            <h3 className="skills__group__heading">Tools</h3>
            <ul>
              <li className="skills__group__item">Git</li>
              <li className="skills__group__item">Visual Studio</li>
              <li className="skills__group__item">Postman</li>
            </ul>
          </div>
          <div className="skills__group">
            <h3 className="skills__group__heading">Design</h3>
            <ul>
              <li className="skills__group__item">Adobe XD</li>
              <li className="skills__group__item">Photoshop</li>
              <li className="skills__group__item">Wireframing</li>
              <li className="skills__group__item">Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
