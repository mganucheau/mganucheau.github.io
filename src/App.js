// src/App.js
import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import Creative from './components/Creative';
import Music from './components/Music';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div data-theme="mytheme">
      <motion.div className="fixed top-0 left-0 right-0 z-50 h-1 origin-left " style={{ scaleX }} />
      <div id="home" className=" text-neutral">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Creative />
        <Music />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
