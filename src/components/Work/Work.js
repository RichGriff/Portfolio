import React from "react";
import Project from "../Project/Project";
import { Projects } from "../../data/Projects";
import "./Work.css";

const Work = () => {
  console.log(Projects);

  return (
    <div className="work__container">
      <h2 id="work">My Work</h2>
      <div className="work__projects">
        {Projects.map((item, index) => {
          if (item.imageFirst) {
            return <Project key={index} project={item} imageFirst />;
          } else {
            return <Project key={index} project={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Work;
