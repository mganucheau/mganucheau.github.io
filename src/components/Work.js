// src/components/Work.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workProjects } from './Data';

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const openModal = (project) => { setSelectedProject(project); };
    const closeModal = () => { setSelectedProject(null); };

    return (
        <>
            <section id="work" className="bg-base-100">
                <div className="container px-5 py-32 mx-auto md:px-10 lg:px-0">
                    <div className="grid grid-cols-1 space-y-16 lg:grid-cols-8 lg:space-y-0">
                        <div className="w-full col-span-1 pt-6 text-center md:col-span-3 lg:col-span-2 lg:text-start">
                            <h2 className="h-16 text-3xl leading-tight">Work<br />Projects</h2>
                            <div className="w-20 h-0 mx-auto lg:w-24 divider divider-neutral lg:mx-0"></div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:col-span-6 lg:grid-cols-4 lg:grid-rows-2 opacity-90">
                            <div className="grid grid-cols-2 col-span-2 row-span-2 gap-4 lg:col-span-2 lg:grid-rows-2">
                                {workProjects.slice(1, 5).map((project) => (
                                    <div
                                        key={project.id}
                                        className="relative w-full h-full overflow-hidden cursor-pointer rounded-btn bg-neutral"
                                        onClick={() => openModal(project)}
                                    >
                                        <img alt={project.title} className="object-cover w-full h-full" src={project.imageUrl} />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                            <h3 className="text-xl text-white">{project.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                key={workProjects[0].id}
                                className="relative w-full h-full col-span-2 row-span-2 overflow-hidden cursor-pointer rounded-btn bg-neutral lg:col-span-2 lg:row-span-2"
                                onClick={() => openModal(workProjects[0])}
                            >
                                <img alt={workProjects[0].title} className="object-cover w-full h-full" src={workProjects[0].imageUrl} />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                    <h3 className="text-xl text-white md:text-xl">{workProjects[0].title}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="w-11/12 max-w-3xl max-h-screen p-6 overflow-hidden rounded-lg bg-base-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="overflow-y-auto max-h-[90vh]">
                                <div className="overflow-hidden rounded-lg ">
                                    <img className="object-cover object-center w-full h-full" src={selectedProject.imageUrl} alt={selectedProject.title} />
                                </div>

                                <div className="flex flex-col mt-10 sm:flex-row">
                                    <div className="text-center md:py-6 md:pr-8 w-3/8">
                                        <div className="flex flex-col mx-auto space-y-1 leading-relaxed md:space-y-4 ps-5 text-start">
                                            <h2 className="text-2xl text-neutral">{selectedProject.title}</h2>
                                        </div>
                                    </div>
                                    <div className="px-4 py-8 mt-4 border-t border-gray-200 w-5/8 sm:pl-8 sm:py-4 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
                                        <p className="text-lg leading-relaxed">{selectedProject.details}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Work;
