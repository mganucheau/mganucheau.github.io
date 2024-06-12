// src/components/Bio.js
import React from 'react';
import { Blurb } from './Data';


const Bio = () => (
    <section id="bio" className="">
        <div className="container px-5 mx-auto md:px-10 lg:px-0">
            <div className="grid grid-cols-1 space-y-16 lg:grid-cols-8 lg:space-y-0">
                <div className="w-full col-span-1 pt-6 text-center md:col-span-3 lg:col-span-2 lg:text-start">
                    <h2 className="h-6 text-3xl ">About</h2>
                    <div className="w-20 h-0 mx-auto lg:w-10 divider divider-neutral lg:mx-0"></div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-6 lg:grid-cols-8">
                    <div className="col-span-1 mx-auto overflow-hidden lg:col-span-2 rounded-btn bg-base-100 h-fit w-fit">
                        <img className=" scale-x-[-1]" src={`${process.env.PUBLIC_URL}/images/matt.png`} alt="matt" />
                    </div>
                    <div className="col-span-1 p-10 leading-relaxed md:mx-12 lg:mx-0 md:text-md justify-content-start lg:col-span-6 bg-base-100 rounded-btn">
                        <p>{Blurb[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Bio;