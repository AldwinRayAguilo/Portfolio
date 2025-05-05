import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          I'd love to hear from you! Feel free to reach out through the form below or connect via my socials.
        </p>

        <div className="contact-info">
          <p>Email: <a href="mailto:aguiloaldwin03@gmail.com">aguiloaldwin03@gmail.com</a></p>
          <p>
            GitHub: <a href="https://github.com/AldwinRayAguilo/Portfolio.git" target="_blank" rel="noopener noreferrer">github.com/AldwinRayAguilo</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/aldwin-aguilo-34b7a0359/" target="_blank" rel="noopener noreferrer">linkedin.com/in/AldwinAguilo</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
