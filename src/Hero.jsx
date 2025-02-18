import React from "react";
import { Link } from "react-router-dom";
import ReactPic from "../src/ReactPic.jpg"; // Corrected path

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={ReactPic} alt="Aldwin Ray Aguilo" className="hero-image" />
        <h1>Hi, I'm Aldwin Ray Aguilo</h1>
        <p>Front-End Developer</p>
        <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
