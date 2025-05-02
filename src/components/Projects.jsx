import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const projectList = [
  {
    title: "Playwright Automation Framework",
    description: [
      "Automates API and UI interactions for login and order creation.",
      "Combines API responses with UI workflows for validation.",
      "Dynamic locators for interacting with changing web elements.",
      "Reusable scripts for setting authentication tokens.",
    ],
    link: "https://github.com/im-gulshan/PlaywrightAutomation",
    icon: <FaGithub />,
  },
  {
    title: "Selenium Automation Framework",
    description: [
      "Built framework using Selenium Java + Maven + TestNG.",
      "Implemented Page Object Model (POM) for maintainability.",
      "Supports scalable and cross-browser testing.",
    ],
    link: "https://github.com/im-gulshan/TestGenie",
    icon: <FaGithub />,
  },
  {
    title: "Personal Portfolio Website",
    description: [
      "Created a portfolio with React, TailwindCSS, Framer Motion.",
      "Showcases projects with smooth animations and transitions.",
      "Deployed on GitHub Pages with optimized performance.",
    ],
    link: "https://github.com/im-gulshan/Gulshan-Portfolio",
    icon: <FaGithub />,
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const toggleProject = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const customBulletStyle = {
    width: "5px",
    height: "5px",
    backgroundColor: "#4A4A4A",
    borderRadius: "50%",
    marginTop: "0.6rem",
  };

  return (
    <section id="projects" className="py-10 px-4 sm:px-6 md:px-16 bg-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-10 border-b-2 pb-2 border-blue-500">
          Projects
        </h2>

        <div className="space-y-4">
          {projectList.map((project, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.3 }}
                className={`rounded-xl shadow-md border transition-all ${isOpen
                  ? "bg-white border-blue-500"
                  : "bg-white hover:bg-blue-50 border-gray-300"
                  }`}
              >
                <div
                  className={`flex items-center justify-between ${isOpen ? "p-6" : "p-3"} cursor-pointer transition-all`}
                  onClick={() => toggleProject(index)}
                  onMouseEnter={() => setHovered(project.title)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`space-y-1 ${isOpen ? "text-base" : "text-sm"}`}>
                    <div className="flex items-center text-blue-700 font-semibold space-x-2">
                      <motion.span
                        className="text-xl"
                        animate={{ rotate: hovered === project.title ? 15 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.span>
                      <span>{project.title}</span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl text-blue-500 transform"
                  >
                    <IoChevronDown />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-700 overflow-hidden"
                    >
                      <ul className="list-none pl-0 ml-0 space-y-2 max-h-80 sm:max-h-60 overflow-y-auto pr-2">
                        {project.description.map((point, idx) => (
                          <motion.li
                            key={`${index}-${idx}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex items-start space-x-2 text-sm sm:text-base"
                          >
                            <div className="flex-shrink-0">
                              <div style={customBulletStyle}></div>
                            </div>
                            <div className="flex-1 break-words">
                              {point}
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          View Project
                          <FaExternalLinkAlt className="ml-2" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;