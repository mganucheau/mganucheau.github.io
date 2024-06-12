import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'daisyui/dist/full.css';
import { IoMailOutline } from "react-icons/io5";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      emailjs.sendForm(
        'service_fb0zeza',
        'template_mx2vpch',
        e.currentTarget,
        'J0ePDWbLjcZ4GGraD'
      ).then(
        () => {
          setMessage({ text: 'Thank you for reaching out! I will be in touch shortly.', type: 'success' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setMessage({ text: 'There was an error sending your message. Please try again.', type: 'error' });
        },
      );
    }
  };

  return (
    <div className="">
      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
          <div className="alert-close" onClick={() => setMessage({ text: '', type: '' })}></div>
        </div>
      )}
      <form className="w-full space-y-4 " noValidate onSubmit={sendEmail}>
        <div className="border h form-control rounded-btn ">
          <input type="text" name="name" placeholder="Name" className=" input input-bordered" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="border form-control rounded-btn">
          <input type="email" name="email" placeholder="Email" className="input input-bordered" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="border form-control rounded-btn">
          <input type="text" name="subject" placeholder="Subject" className=" input input-bordered" value={formData.subject} onChange={handleInputChange} required />
        </div>
        <div className="border form-control rounded-btn">
          <textarea name="message" placeholder="Message" className="textarea textarea-bordered textarea-lg " value={formData.message} onChange={handleInputChange} required />
        </div>
        <div className="text-end">
          <button type="submit" className="mt-5 btn *:btn-neutral text-neutral transition-transform duration-200 ease-in-out hover:scale-110 "><IoMailOutline className="w-8 h-8 me-2 text-neutral" />Send</button>
        </div>
      </form>
    </div>

  );
};

export default ContactForm;

