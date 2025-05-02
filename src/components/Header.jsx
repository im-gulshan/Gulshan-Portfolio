import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Scroll to section with an offset
  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      // Scroll with an offset of 80px (height of the header)
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust 80px for your header height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-4 text-white fixed top-0 w-full z-10 shadow-md" style={{ height: '70px' }}>
      <div className="w-full px-6 md:px-20 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold cursor-pointer hover:text-gray-300 transition duration-300">Gulshan Kumar</h1>
        <nav>
          <ul className="flex space-x-6">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScroll('about');
                }}
                className="hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScroll('experience');
                }}
                className="hover:text-gray-300 transition duration-300"
              >
                Experience
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScroll('skills');
                }}
                className="hover:text-gray-300 transition duration-300"
              >
                Skills
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScroll('contact');
                }}
                className="hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
