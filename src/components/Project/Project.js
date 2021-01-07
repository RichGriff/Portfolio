import React from "react";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";

import projectScreen from "./explore_screen.png";

import "./Project.css";

const Project = ({ project, imageFirst }) => {
  let projectLayout;
  if (imageFirst) {
    projectLayout = <Layout2 project={project} projectScreen={projectScreen} />;
  } else {
    projectLayout = <Layout1 project={project} projectScreen={projectScreen} />;
  }

  return (
    <>
      <div className="project__container">
        <div className="project__wrapper">{projectLayout}</div>
      </div>
    </>
  );
};

export default Project;
