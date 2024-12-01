// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-8 py-20">
      <h2 className="text-4xl text-light font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6  text-xl">

      <div id='skillBox' className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">Java Programming</h3>
        </div>


      <div id='skillBox' className="  bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">React Js</h3>
        </div>
        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">JavaScript</h3>
        </div>
        
        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">Tailwind CSS</h3>
        </div>

        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">HTML</h3>
        </div>
        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">CSS</h3>
        </div>

        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">Database Management System</h3>
        </div>
        
        <div id='skillBox' className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">SQL</h3>
        </div>

        <div id='skillBox'className="bg-secondary p-6 rounded-lg shadow-md text-center">
          <h3 className="text-light font-bold">Object Oriented Programming</h3>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
