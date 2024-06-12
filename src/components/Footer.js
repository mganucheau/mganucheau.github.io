// src/components/Footer.js
import React from 'react';
import { FaReact, FaCoffee, FaHeart, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBandcamp } from "react-icons/si";

const Footer = () => {
    return (
        <section id="footer" className="bg-neutral text-neutral-content">

            <div className="container flex items-center px-5 py-6 mx-auto text-center text-md footer md:flex-cols-3 md:px-10 lg:px-0">

                <div className="items-center grid-flow-col col-span-1 space-x-1 justify-self-center md:justify-self-start">
                    <p className="flex flex-row items-center w-full gap-2 text-center ">Built with
                        <FaHeart className="w-6 h-6 fill-red-500" />
                        <FaCoffee className="w-6 h-6 fill-yellow-800" />
                        <a href='https://www.reactjs.com'><FaReact className="w-6 h-6 transition-transform duration-200 ease-in-out fill-cyan-400 hover:scale-125" /></a>and
                        <a href='https://www.tailwindcss.com'><RiTailwindCssFill className="w-6 h-6 transition-transform duration-200 ease-in-out fill-cyan-500 hover:scale-125" /></a>
                    </p>
                </div>
                <div className="place-self-center">
                    <p className="w-full text-center">Copyright © 2024 Ganucheau.com</p>
                </div>
                <div className="items-center grid-flow-col col-span-1 space-x-1 justify-self-center md:justify-self-end">
                    <a href='https://www.linkedin.com/in/mganucheau/' className="flex transition-transform duration-200 ease-in-out hover:text-blue-700 hover:scale-125"><FaLinkedinIn className="w-6 h-6" /></a>
                    <a href='https://github.com/mganucheau' className="flex transition-transform duration-200 ease-in-out hover:text-purple-600 hover:scale-125"><FaGithubAlt className="w-6 h-6 " /></a>
                    <a href='https://ganucheau.bandcamp.com/album/variations-on-a-playground' className="flex transition-transform duration-200 ease-in-out hover:text-blue-400 hover:scale-125"><SiBandcamp className="w-6 h-6" /></a>
                </div>
            </div>
        </section>
    );
}

export default Footer;