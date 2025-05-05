// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Picreact from "../src/assets/Picreact.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={Picreact} alt="Aldwin Ray Aguilo" className="hero-image" />
        <h1 className="hero-title">Hello, I'm Aldwin Ray Aguilo</h1>
        <p className="hero-subtitle">"An Aspiring Front-End Developer"</p>
        <Link to="/about">
          <button className="hero-button">Learn More About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
