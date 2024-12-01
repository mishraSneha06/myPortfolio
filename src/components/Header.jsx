// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-secondary px-8 py-4 flex justify-between items-center z-50">
      <a href="#" className="text-light text-2xl font-bold">Portfolio</a>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-light hover:text-accent">Home</a>
        <a href="#about" className="text-light hover:text-accent">About Me</a>
        <a href="#skills" className="text-light hover:text-accent">Skills</a>
        <a href="#projects" className="text-light hover:text-accent">Projects</a>
        <a href="#contact" className="text-light hover:text-accent">Contact Me</a>
      </nav>
      <i className="fa-solid fa-bars text-light md:hidden"></i>
    </header>
  );
};

export default Header;
