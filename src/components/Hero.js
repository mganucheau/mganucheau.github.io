// src/components/Hero.js
import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="home" className="">
      <div className="container grid grid-cols-1 gap-8 px-5 m-auto pt-36 lg:py-60 md:grid-cols-2 lg:grid-cols-5 md:px-10 lg:px-0 h-4/6">
        <div className="col-span-3 my-auto space-y-10 md:col-span-2">
          <div className="space-y-4 text-neutral ">
            <h1 class="leading-tight  text-3xl">Hi, I'm</h1>
            <h1 className="text-6xl leading-tight sm:text-5xl md:text-7xl">Matthew<br />Ganucheau</h1>
            <p class="text-2xl md:pe-36 lg:pe-0">I'm a creative designer with a passion for connecting data informed design with creative vision to build innovative expereinces.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-fit">
            <div>
              <a href="#about" className="flex transition-transform duration-200 hover:scale-110 btn btn-primary btn-md md:btn-lg"><FaArrowDown className="w-6 h-6 md:w-7 me-2 animate-bounce" />Matt Who?</a>
            </div>
            <div>
              <a href="#contact" className="flex transition-transform duration-200 ease-in-out btn btn-neutral btn-md md:btn-lg hover:scale-110"><IoMailOutline className="w-9 h-9 me-2" />Let's Talk</a>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3 overflow-hidden border rounded-btn md:aspect-h-5 md:aspect-w-8 ">
          <img className="object-cover scale-110 rotate-180 bg-neutral opacity-80 -left-25" src={`${process.env.PUBLIC_URL}/images/bg.webp`} alt="background pattern" />
        </div>
      </div >
    </section >
  );
};

export default Hero;


