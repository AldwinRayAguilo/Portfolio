import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import incubatorImage from  "../assets/projects/incubator.jpg";
import otwtImage from "../assets/projects/otwt.png";
import mrbrewImage from  "../assets/projects/mrbrew.png";
import calculatorImage from  "../assets/projects/calculator.png";
import pokedexImage from  "../assets/projects/pokedex.png";

const projectData = [
  {
    title: "IoT-Based Egg Incubator",
    description: "A smart incubator with temperature and humidity monitoring using ESP32 and Firebase.",
    image: incubatorImage,
    github: "https://github.com/AldwinRayAguilo/incubator.git",
    live: ""
  },
  {
    title: "On the Way we Trust",
    description: "Provides a streamlined interface for users to input their current and destination locations, generating route guidance from point A to point B.",
    image: otwtImage,
    github: "https://github.com/AldwinRayAguilo/OTWT.git",
    live: ""
  },
  {
    title: "Mr.Brew",
    description: "An eCommerce website where you can browse and order a variety of drinks like milk tea, coffee, and more—all in just a few clicks.",
    image: mrbrewImage,
    github: "https://github.com/AldwinRayAguilo/MrBrew.git",
    live: ""
  },
  {
    title: "Calculator",
    description: "A scientific calculator that handles advanced operations like trigonometry, logarithms, exponents, and basic arithmetic.",
    image: calculatorImage,
    github: "https://github.com/kapppitan/calculator.git",
    live: "https://ibrahim-aguilo-calculator.netlify.app/"
  },
  {
    title: "Pokédex Battle",
    description: "A mini Pokédex with team creation and battle simulation using PokéAPI.",
    image: pokedexImage,
    github: "https://github.com/AldwinRayAguilo/pokedex.git",
    live: ""
  }
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
