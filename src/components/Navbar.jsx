import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/navlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu when the icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Ensure the menu closes when resizing above 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Close the menu when clicking a link */}
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
      {/* Overlay to close the mobile menu when clicked outside */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
