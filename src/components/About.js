// src/components/About.js
import React from "react";
import Skills from "./Skills";
import Bio from "./Bio";
import Experience from "./Experience";

const About = () => {
  return (
    <section id="about" className="py-32 bg-base-200">
      <div className="container px-5 mx-auto md:px-10 lg:px-0">
        <Bio />
        <Experience />
        <Skills />
      </div>
    </section>
  );
};

export default About;
