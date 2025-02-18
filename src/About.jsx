import React from "react";
import ReactPic from "../src/ReactPic.jpg"; 

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <img src={ReactPic} alt="Aldwin Ray Aguilo" className="about-image" />
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                        I'm a 4th Year Information Technology student passionate about front-end development, 
                        problem-solving, and continuous learning. I love crafting engaging user experiences 
                        and exploring new technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
