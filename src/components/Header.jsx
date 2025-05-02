import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Optional: using Lucide icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close menu on selection (mobile UX)
    }
  };

  const navItems = [
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white fixed top-0 w-full z-10 shadow-md" style={{ height: '70px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer hover:text-gray-300 transition duration-300">
          Gulshan Kumar
        </h1>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item.target}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="list-none cursor-pointer"
            >
              <a
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.target);
                }}
                className="hover:text-gray-300 transition duration-300"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 pb-4 pt-2 absolute top-[70px] left-0 w-full z-20 shadow-lg">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <motion.li
                key={item.target}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="list-none cursor-pointer"
              >
                <a
                  href={`#${item.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.target);
                  }}
                  className="block text-white text-lg hover:text-gray-300 transition duration-300"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
