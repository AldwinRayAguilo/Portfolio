import React from "react";
import { motion } from "framer-motion";
import Picreact from "../assets/Picreact.jpg";
import CertificateSection from "../components/CertificateSection";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <motion.img
                    src={Picreact}
                    alt="Aldwin Ray Aguilo"
                    className="about-image"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                />

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>About Me</h1>
                    <p>
                        I'm a 4th Year Information Technology student passionate about front-end development,
                        problem-solving, and continuous learning. I love crafting engaging user experiences
                        and exploring new technologies.
                    </p>

                    <h2>Skills & Expertise</h2>
                    <div className="skills-container">
                        <span>HTML & CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Arduino & IoT</span>
                        <span>Firebase</span>
                    </div>

                    <h2>Career Goals</h2>
                    <p>
                        My goal is to become a skilled front-end developer, building
                        user-friendly applications while continuously learning new technologies.
                    </p>

                    <h2>Fun Facts & Hobbies</h2>
                    <p>
                        I enjoy playing drums and guitar, listening to music, exploring new tech, and traveling.
                        One of my dream trips is to visit Japan to experience the places I've seen while watching anime!
                    </p>

                    <CertificateSection />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
