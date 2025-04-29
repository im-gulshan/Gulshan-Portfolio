import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-4 text-white fixed top-0 w-full z-10 shadow-md">
      <div className="w-full px-6 md:px-20 flex justify-between items-center">
        {/* Branding/Logo */}
        <h1 className="text-3xl font-extrabold cursor-pointer hover:text-gray-300 transition duration-300">Gulshan Kumar</h1>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a href="#projects" className="hover:text-gray-300 transition duration-300">Projects</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
