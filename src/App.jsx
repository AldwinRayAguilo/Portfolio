import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar"; 
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
