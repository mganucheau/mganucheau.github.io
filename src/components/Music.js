// src/components/Music.js
import React from "react";
import { albums } from './Data';

const Music = () => {
    return (
        <section id="music" className="pt-24 lg:pt-8 pb-28 bg-base-200">
            <div className="container px-5 mx-auto md:px-10 lg:px-0">
                <div className="container grid grid-cols-1 grid-rows-1 space-y-16 lg:space-y-0 md:grid-cols-3 lg:grid-cols-8">
                    <div className="w-full col-span-1 text-center md:col-span-3 lg:col-span-2 lg:text-start">
                        <h2 className="h-6 text-2xl ">Music</h2>
                        <div className="w-20 h-0 mx-auto lg:w-10 divider divider-neutral lg:mx-0"></div>
                    </div>
                    <div className="grid grid-cols-1 col-span-5 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-6">
                        {albums.map((album, index) => (
                            <div className="">
                                <div key={index} className="aspect-w-1 aspect-h-1">
                                    <iframe className="rounded-btn opacity-85" src={album.src} title="bandcamp album" s>
                                        <a href={album.href}>{album.title} by Ganucheau</a>
                                    </iframe>
                                </div>
                                <h3 className="px-1 py-4 text-lg text-center text-neutral">{album.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Music;
