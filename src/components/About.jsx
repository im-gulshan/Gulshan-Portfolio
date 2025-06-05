import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const About = () => {
  const aboutRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const currentRef = aboutRef.current;
    const isMobile = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollIndicator(entry.isIntersecting);
      },
      {
        threshold: isMobile ? 0.5 : 1.0,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Function to disable context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Function to disable text selection
  const handleSelectStart = (e) => {
    e.preventDefault();
  };

  // Function to disable drag
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  // Function to disable keyboard shortcuts
  const handleKeyDown = (e) => {
    // Disable Ctrl+A (Select All), Ctrl+C (Copy), Ctrl+V (Paste), F12 (DevTools)
    if (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'v')) {
      e.preventDefault();
    }
    if (e.key === 'F12') {
      e.preventDefault();
    }
  };

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-20 py-20 bg-white select-none"
      onContextMenu={handleContextMenu}
      onSelectStart={handleSelectStart}
      onDragStart={handleDragStart}
      onKeyDown={handleKeyDown}
      style={{ 
        userSelect: 'none',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        webkitTouchCallout: 'none',
        webkitUserDrag: 'none',
        khtmlUserSelect: 'none'
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={`${process.env.PUBLIC_URL}/gulshan-kumar.jpg`}
            alt="Gulshan Kumar Profile"
            className="w-full h-full object-cover"
            onDragStart={handleDragStart}
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl px-2"
        >
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Hello! I'm <strong className="text-blue-600">Gulshan Kumar</strong>, a QA Engineer-II at <strong className="text-blue-600">S&P Global</strong> with 6+ years of experience in Automation, Performance, API, and Manual Testing. Passionate about ensuring software quality, collaborating with teams, and always learning new technologies.
          </p>

          {/* Email and LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-blue-500 text-base sm:text-lg mt-6 justify-center md:justify-start"
          >
            <a
              href="mailto:kgulshan230@gmail.com"
              className="flex items-center gap-2 hover:underline hover:text-blue-600"
            >
              <Mail className="text-xl sm:text-2xl" />
              <span>kgulshan230@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gulshan98/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline hover:text-blue-600"
            >
              <Linkedin className="text-xl sm:text-2xl" />
              <span>LinkedIn Profile</span>
            </a>
          </motion.div>

          {/* Mobile-only scroll down indicator below LinkedIn */}
          {showScrollIndicator && window.innerWidth <= 768 &&(
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0, 10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="block sm:hidden mt-6 text-blue-600 text-sm flex flex-col items-center pointer-events-none"
            >
              <span>Scroll Down</span>
              <svg className="w-6 h-6 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          )}

          {/* Scroll Down Indicator for Web Only */}
          {showScrollIndicator && window.innerWidth > 768 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0, 10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 text-blue-600 text-sm pointer-events-none flex flex-col items-center space-y-2"
              style={{ transform: 'translateX(-10%)' }} // Move it to the left
            >
              <span>Scroll Down</span>
              <svg className="w-6 h-6 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default About;