// src/components/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="bg-base-100 text-neutral ">
      <div className="container px-5 pt-32 pb-20 mx-auto lg:pb-28 md:px-10 lg:px-0">
        <div className="container grid grid-cols-1 grid-rows-1 mx-auto space-y-16 lg:space-y-0 md:grid-cols-3 lg:grid-cols-8">
          <div className="col-span-1 text-center md:col-span-3 lg:col-span-2 lg:text-start">
            <h2 className="h-6 text-3xl ">Contact</h2>
            <div className="w-24 h-0 mx-auto lg:mx-0 lg:w-16 divider divider-neutral"></div>
          </div>
          <div className="container grid grid-cols-1 col-span-5 grid-rows-1 gap-0 space-y-16 lg:space-y-0 lg:gap-6 lg:grid-cols-2 lg:col-span-6">
            <div className="col-span-1 p-6 border bg-neutral text-neutral-content rounded-btn border-neutral">
              <div className='pt-4 space-y-10'>
                <h1 className="text-2xl text-center text-neutral-content">Let's build something great together!</h1>
                <ContactForm />
              </div>
            </div>
            <div className="col-span-1 overflow-hidden border border-neutral opacity-80 md:col-span-3 lg:col-span-1 rounded-btn bg-neutral ">
              <img src='./images/bg.webp' alt="" className="object-cover scale-150 rotate-60 -left-20" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contact;
