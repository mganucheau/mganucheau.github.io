// src/components/Expereience.js
import React from 'react';
import { certData, workData, educationData } from './Data';

const Experience = () => (
    <section id="experience" className="pt-24 lg:pt-8 text-neutral">
        <div className="container px-5 mx-auto md:px-10 lg:px-0">
            <div className="grid grid-cols-1 space-y-16 lg:grid-cols-8 lg:space-y-0">
                <div className="w-full col-span-1 pt-6 text-center md:col-span-3 lg:col-span-2 lg:text-start">
                    <h2 className="h-6 text-2xl ">Expereince</h2>
                    <div className="w-20 h-0 mx-auto lg:w-10 divider divider-neutral lg:mx-0"></div>
                </div>
                <div className="grid grid-cols-1 col-span-5 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-6">
                    <div className="px-6 py-8 bg-base-100 basis-1/3 rounded-btn">
                        <h3 className="h-6 text-xl text-neutral">Certifications</h3>
                        <div className="w-24 h-0 pb-4 divider divider-neutral lg:mx-0"></div>
                        <div className="flex">
                            <div className="space-y-6 ">
                                {certData.map((cert, index) => (
                                    <div key={index} className="">
                                        <div className="flex flex-row gap-4 leading-tight flex-cols-4">
                                            <img alt={cert.title} className="object-cover my-auto w-14 h-14" src={cert.imageUrl} />
                                            <h3 className="my-auto font-medium text-md">{cert.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-8 bg-base-100 basis-1/3 rounded-btn">
                        <h3 className="h-6 text-xl text-neutral">Work History</h3>
                        <div className="w-24 h-0 pb-4 divider divider-neutral lg:mx-0"></div>
                        <div className="flex ">
                            <div className="space-y-6">
                                {workData.map((work, index) => (
                                    <div key={index} className="">
                                        <div className="flex flex-row gap-4 flex-cols-4">
                                            <img alt={work.title} className="object-cover my-auto rounded-full w-14 h-14" src={work.imageUrl} />
                                            <div className="my-auto leading-tight">
                                                <h3 className="font-medium">{work.company}</h3>
                                                <p className="text-xs ">{work.position}</p>
                                                <p className="text-xs font-light ">{work.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-8 bg-base-100 basis-1/3 rounded-btn h-fit">
                        <h3 className="h-6 text-xl text-neutral">Education</h3>
                        <div className="w-20 h-0 pb-4 divider divider-neutral lg:mx-0"></div>
                        <div className="flex ">
                            <div className="space-y-6 ">
                                {educationData.map((education, index) => (
                                    <div key={index} className="">
                                        <div className="flex flex-row gap-4 flex-cols-4">
                                            <img alt={education.title} className="object-cover my-auto rounded-full w-14 h-14" src={education.imageUrl} />
                                            <div className="my-auto leading-tight">
                                                <h3 className="font-medium text-md ">{education.institution}</h3>
                                                <p className="text-xs ">{education.degree}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
);

export default Experience;
