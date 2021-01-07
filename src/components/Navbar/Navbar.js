import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__logo">
            Richard Griffiths
          </Link>
          <div className="nav__icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <LinkS to="work">My Work</LinkS>
            </li>
            <li className="nav__item">
              <LinkS to="about">About</LinkS>
            </li>
            <li className="nav__item">
              <LinkS to="skills">Skills</LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
