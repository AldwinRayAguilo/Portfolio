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
                    <h2>Skills & Expertise</h2>
                    <div className="skills-container">
                        <span>HTML & CSS</span>
                        <span>Arduino & IoT</span>
                    </div>
                    <h2>Career Goals</h2>
                    <p>
                        My goal is to become a skilled front-end developer, building 
                        user-friendly applications while continuously learning new technologies.
                    </p>
                    <h2>Fun Facts & Hobbies</h2>
                    <p>
                        I enjoy playing drums and guitar, listening to music, exploring new tech, and traveling. 
                        One of my dream trips is to visit Japan to experience the places I have seen while watching anime!
                    </p>
                    <h2>Let's Connect!</h2>
                    <p>If you're interested in working together, feel free to reach out!</p>
                    <p>aguiloaldwin03@gmail.com or 09058803221</p>
                </div>
            </div>
        </div>
    );
};

export default About;
