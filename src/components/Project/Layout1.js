import React from "react";
import { FiGlobe } from "react-icons/fi";
import { ImGithub } from "react-icons/im";

const Layout1 = ({ project, projectScreen }) => {
  return (
    <div className="project__row">
      <div className="project__col1">
        <div className="project__details">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div className="project__tools">
            <p>{project.tools.join(", ")}</p>
          </div>
          <ul className="project__icons">
            <li>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project__github">
                <ImGithub />
              </a>
            </li>
            <li>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project__demo">
                <FiGlobe />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project__col2">
        <div className="project__image">
          <img src={project.screen} alt="screen" />
        </div>
      </div>
    </div>
  );
};

export default Layout1;
