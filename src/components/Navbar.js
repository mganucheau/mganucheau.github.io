import React, { useState, useEffect, useMemo } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBlog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigation = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Creative", href: "#creative" },
    { name: "Contact", href: "#contact" }
  ], []);

  const icons = {
    Home: <FaHome className="inline-block mr-2" />,
    About: <FaUser className="inline-block mr-2" />,
    Work: <FaBriefcase className="inline-block mr-2" />,
    Contact: <FaEnvelope className="inline-block mr-2" />,
    Creative: <FaBlog className="inline-block mr-2" />,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation.map(item => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSelectedLink(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => {
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, [navigation]);

  return (
    <>
      <div className={`fixed w-full z-40 top-0 left-0 transition-all duration-800 ${isScrolled ? 'bg-base-100 opacity-91 shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full h-1 bg-gray-200">
          <div className="h-full bg-primary" style={{ width: `${scrollProgress}%` }} />
        </div>
        <div className="container flex flex-col py-6 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center px-5 md:px-10 lg:px-0">
              <a className="text-2xl font-bold pe-3" href="#home">MG.</a>
              <div className="dropdown lg:hidden">
                <button tabIndex={0} className="p-0 m-0 btn btn-link text-neutral">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </button>
                <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 bg-base-200 shadow rounded-box w-52">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} onClick={() => setSelectedLink(item.name)}>
                        {icons[item.name]} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="items-center justify-end hidden space-x-4 lg:flex lg:flex-1">
              <ul className="space-x-2 menu menu-horizontal">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={item.name === selectedLink ? "font-semibold" : ""}
                      onClick={() => setSelectedLink(item.name)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="transition-transform duration-200 ease-in-out hover:scale-110 btn btn-md btn-neutral rounded-btn" onClick={() => setIsModalOpen(true)}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-10 overflow-hidden bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative flex w-full h-full p-2 overflow-hidden bg-base-300 lg:max-w-5xl flex-cols-2 rounded-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <object data="./Matthew Ganucheau - Resume.pdf" type="application/pdf" className="w-full h-full">
                <p>Unable to display PDF file. <a href="./Matthew Ganucheau - Resume.pdf">Download</a> instead.</p>
              </object>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
