// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Beauty Salon Website",
      description: "A front-end design for a beauty salon website using HTML, CSS, and JavaScript, offering a clean, user-friendly interface with a booking form, showcasing services and products, and utilizing JavaScript for form validation.",
    },
    {
      name: "Employee Management System",
      description: "A role-based web application built with React, JavaScript, and Tailwind CSS that features an admin dashboard to create and assign tasks, and an employee dashboard to manage and track tasks in categories like active, new, completed, and failed.",
    },
    {
      name: "Portfolio Website",
      description: "A responsive portfolio website created with HTML, CSS, and JavaScript, designed to showcase projects, skills, and experience with a mobile-first approach for cross-device compatibility and dynamic content implementation.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-8 py-20 bg-secondary">
      <h2 className="text-4xl text-light font-bold mb-8 text-center">Projects</h2>
      <div   className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
          id='projectBox'
            key={index}
            className="bg-light text-secondary p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-xl mb-4 text-2xl">{project.name}</h3>
            <p className="text-xl">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
