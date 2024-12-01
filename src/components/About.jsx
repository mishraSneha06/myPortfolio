// src/components/About.jsx
import React from "react";
import profileImg from "../assets/snehaportfolio.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-8 py-20 bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <img src={profileImg} alt="About Sneha" className="w-full rounded-lg" />
        <div>
          <h2 className="text-4xl text-light font-bold mb-4">About <span className="text-accent">Me</span></h2>
          <p className="text-light">
            Hello there! I'm a passionate undergraduate student majoring in <b>Information Technology 
            Engineering from Institute of Engineering and Technology , DAVV , Indore</b>, dedicated to crafting seamless digital experiences. With a particular flair 
            for Frontend development, I thrive on turning innovative ideas into functional, scalable 
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
