import React from "react";
import { Link } from "react-router-dom";
import ReactPic from "../src/ReactPic.jpg"; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={ReactPic} alt="Aldwin Ray Aguilo" className="hero-image" />
        <h1>Hello, I'm Aldwin Ray Aguilo</h1>
        <p>"An Aspiring Front-End Developer"</p>
        <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
