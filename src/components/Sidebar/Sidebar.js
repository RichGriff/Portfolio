import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

import "./Sidebar.css";

const Sidebar = ({ toggle }) => {
  return (
    <div className="sidebar__container" onClick={toggle}>
      <div className="sidebar__icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <li className="sidebar__link">
            <LinkS to="about" onClick={toggle}>
              My Work
            </LinkS>
          </li>
          <li className="sidebar__link">
            <LinkS to="about" onClick={toggle}>
              About
            </LinkS>
          </li>
          <li className="sidebar__link">
            <LinkS to="about" onClick={toggle}>
              Skills
            </LinkS>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
