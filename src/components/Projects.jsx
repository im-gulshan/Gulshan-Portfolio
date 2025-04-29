import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";

const projectList = [
  {
    title: "Playwright Automation",
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
    title: "Selenium Automation",
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
    link: "https://im-gulshan.github.io/Gulshan-Portfolio/",
    icon: <FaLink />,
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleProject = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // collapse if same project clicked
    } else {
      setExpandedIndex(index); // open new project
    }
  };

  return (
    <section id="projects" className="py-10 px-6 md:px-16 bg-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 10 }}
              animate={{ borderRadius: 10 }}
              className={`bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ${
                expandedIndex === index ? "border-l-4 border-blue-600 bg-blue-50" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="text-xl font-semibold text-gray-800">{project.title}</div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl text-blue-500"
                >
                  +
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                {expandedIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="space-y-2 text-gray-700 pl-4">
                      {project.description.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-start cursor-pointer"
                        >
                          <span className="mr-2 text-blue-400">➤</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex items-center mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        View Project
                        <FaExternalLinkAlt className="ml-2" />
                      </a>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 ml-4 text-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        {project.icon}
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
