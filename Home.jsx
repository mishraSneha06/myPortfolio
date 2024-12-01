// src/components/Home.jsx
import React from "react";
import profileImg from "../assets/snehaportfolio.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-20"
    >
      <div>
        <h3 className="text-light text-3xl font-bold">Hi, Myself</h3>
        <h1 className="text-light text-5xl font-extrabold my-4">Sneha Mishra</h1>
        <h3 className="text-light text-3xl font-bold">
          And I am a <span className="text-accent">Frontend Developer.</span>
        </h3>
        <p className="text-light mt-4">
          I am a third-year undergraduate student majoring in Information Technology.
        </p>
        <a href="#" className="mt-6 inline-block bg-blue-900 hover:bg-blue-800 text-primary px-6 py-2 rounded-full">
          Download CV
        </a>
      </div>
      <img
        id='homeImg'
        src={profileImg}
        alt="Sneha"
        className="w-72 h-72 object-cover rounded-full mt-6 md:mt-0"
      />
    </section>
  );
};

export default Home;
