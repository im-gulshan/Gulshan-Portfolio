import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const experienceList = [
  {
    role: "Engineer II, Quality Engineering",
    company: "S&P Global",
    duration: "Oct 2024 – Present",
    details: [
      "Developing an automation framework using Java, OOPs, Selenium, TestNG, and POM to reduce manual execution time from 1 month to 1.5 week, achieving a 70%-time savings.",
      "Defining the testing scope for modules and writing test cases for critical and edge scenarios to ensure product quality.",
      "Analyzing customized modules for multiple clients and providing timelines for testing completion.",
      "Providing feedback to enhance user experience by identifying functionality improvements and discussing intuitive solutions directly with stakeholders.",
      "Assisting juniors in script development, debugging, and guiding them on best practices for efficient automation."
    ],
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    duration: "Oct 2022 – Oct 2024",
    details: [
      "Delivering exceptional software products with Agile methodologies using Selenium for Automation testing and robust quality maintenance.",
      "Developed a detailed Master Test Plan (MTP) & User Acceptance Test (UAT) Plan aligned with client requirements, creating and executing positive and negative test cases for Android and Web applications for performance, automation, and manual testing.",
      "Contributed in designing and developing the automation framework, including suites, packages and scripts, and skilled in end-to-end automation testing, test case creation, execution, and maintenance.",
      "Reduced software execution time by 30% through automation testing compared to manual testing.",
      "Increased concurrent user’s capacity from 50 to 500 of the platform by performance testing.",
      "I utilized Locators, Explicit and Implicit Waits, Dynamic Path, Page Object Model (POM), Cross-browser Testing, Parallel Execution, and Test Data Management.",
      "Configured JMeter in the system and given KT to QA team, created frameworks from scratch, proficient in end-to-end performance testing, by utilizing correlation, timers, samplers, post processor, listeners, etc., and did performance monitoring.",
      "Experienced in developing and executing scripts in JMeter and analysed results for optimal performance.",
      "Collaborated with concerned person to understand product functionality and performance needs. Conducted root cause analyses on test results and communicated performance, automation & manual testing KPIs to project lead.",
      "Proficient in manual REST API testing with Postman, skilled in utilizing GET, PUT, POST, and DELETE methods.",
      "Proficient in Java OOPs and other basic concepts of Java and used Azure DevOps Board and JIRA for bug tracking.",
      "Experienced in performing a range of detailed testing types, including Functionality, UI, Adhoc, Black Box, Regression, Integration, Smoke, Sanity, Stress, Load, Endurance and Accessibility testing. Filling in gaps in test coverage, adding new scenarios, and building a stable environment."
    ],
  },
  {
    role: "Tron SME",
    company: "Amazon",
    duration: "May 2019 – Sept 2022",
    details: [
      "Define procedures and standards about process knowledge in a best way to execute a task.",
      "Define performance objective & determine acceptable performance level.",
      "Lead a team of size of 10 members as a SME to execute a task in a best way.",
      "Resolve associates issue within their area of expertise.",
      "Led a high-performing team that consistently achieved over 98% accuracy in its operations.",
      "The Tron Team is a part of Amazon Vision Operations Center (AVOC), which remotely handles stowing activities in the Fulfilment centers.",
      "When a product is placed into a location, this activity is recorded and is sent to the Tron team for verification on the writing tool.",
      "Working on Writing tool to provide Machine learning support to robots used in Amazon Robotics Fulfilment Centers.",
      "Daily team huddle of previous day’s performance and weekly business review of the performance of team.",
      "Maintenance of performance data on excel daily to predict metric at end of the month.",
      "Worked on implementation of 3 pilot projects.",
      "Responsible for taking team huddle and doubt clearance sessions with team for defect analysis."
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const customBulletStyle = {
    width: "5px",
    height: "5px",
    backgroundColor: "#4A4A4A",
    borderRadius: "50%",
    marginTop: "0.6rem",
  };

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-10 px-4 sm:px-6 md:px-16 bg-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-10 border-b-2 pb-2 border-blue-500">
          Experience
        </h2>

        <div className="space-y-4">
          {experienceList.map((exp, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.3 }}
                className={`rounded-xl shadow-md border transition-all ${
                  isOpen ? "bg-white border-blue-500" : "bg-white hover:bg-blue-50 border-gray-300"
                }`}
              >
                <div
                  className={`flex items-center justify-between flex-wrap ${
                    isOpen ? "p-5 sm:p-6" : "p-3"
                  } cursor-pointer transition-all`}
                  onClick={() => toggleExperience(index)}
                  onMouseEnter={() => setHovered(exp.role)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`space-y-1 ${isOpen ? "text-base" : "text-sm"}`}>
                    <div className="flex items-center text-blue-700 font-semibold space-x-2">
                      <motion.span
                        className="text-xl"
                        animate={{ rotate: hovered === exp.role ? 15 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FaBuilding />
                      </motion.span>
                      <span>{exp.company}</span>
                    </div>
                    <div
                      className={`font-bold text-gray-800 ${isOpen ? "text-lg sm:text-xl" : "text-sm"
                        }`}
                    >
                      {exp.role}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaCalendarAlt className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 sm:mt-0 text-xl text-blue-500"
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
                        {exp.details.map((point, idx) => (
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

export default Experience;
