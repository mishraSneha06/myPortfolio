// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-20">
      <h2 className="text-4xl text-light font-bold mb-8 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-secondary p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-light mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-light mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-light mb-2">Message</label>
          <textarea
            className="w-full p-2 rounded-lg"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full bg-blue-900 hover:bg-blue-800 text-light py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
