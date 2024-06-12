// src/components/Skills.js
import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { FaChartLine, FaChalkboardUser, FaMagnifyingGlass } from "react-icons/fa6";

const services = [
    {
        title: "UX Research & Design",
        description: "Expert in crafting engaging, intuitive user interfaces and improving the user journey through thoughtful design and user testing.",
        icon: FaMagnifyingGlass
    },
    {
        title: "Program & Project Management",
        description: "Proven track record of leading cross-functional teams and managing projects from inception to completion, ensuring timely and within-budget delivery.",
        icon: FaTasks
    },
    {
        title: "Instructional Design",
        description: "Adept in creating innovative and effective educational content tailored to diverse audiences, enhancing learning outcomes and engagement.",
        icon: FaChalkboardUser
    },
    {
        title: "Analytics & Evaluation",
        description: "Skilled in using data to inform design decisions, ensuring solutions are driven by user needs and measurable outcomes.",
        icon: FaChartLine
    }
];

const Skills = () => (
    <section id="skills" className="pt-24 lg:pt-8 ">
        <div className="container px-5 mx-auto md:px-10 lg:px-0">

            <div className="container grid grid-cols-1 grid-rows-1 space-y-16 lg:space-y-0 md:grid-cols-3 lg:grid-cols-8">
                <div className="w-full col-span-1 pt-6 text-center md:col-span-3 lg:col-span-2 lg:text-start">
                    <h2 className="h-6 text-2xl ">Skills</h2>
                    <div className="w-20 h-0 mx-auto lg:w-10 divider divider-neutral lg:mx-0"></div>
                </div>
                <div className="grid grid-cols-1 col-span-5 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:col-span-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="flex flex-col p-6 rounded-btn bg-base-100">
                                <div className="flex flex-row gap-4 ">
                                    <Icon className="w-8 h-8 my-auto" ></Icon>
                                    <h3 className="w-full my-auto leading-tight text-md text-neutral">{service.title}</h3>
                                </div>
                                <div className="mx-auto divider divider-neutral lg:mx-0"></div>

                                <p className="text-sm text-neutral">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
