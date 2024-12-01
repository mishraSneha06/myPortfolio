// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-4 text-black">
      <p className="text-light">
        &copy; {new Date().getFullYear()} Sneha Mishra. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
