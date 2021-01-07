import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <CSSTransition timeout={320} in={isOpen} classNames="sidebar" unmountOnExit>
        <Sidebar toggle={toggle} />
      </CSSTransition>
      <Navbar toggle={toggle} />
      <Hero />
      <Work />
      {/* About */}
      {/* Skills */}
    </Router>
  );
}

export default App;
