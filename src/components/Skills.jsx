import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools, FaCode, FaCogs, FaVial, FaUserTie } from "react-icons/fa";

const skillCategories = [
  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Azure DevOps Board", "Jira", "GitHub", "JMeter", "Eclipse", "Postman"],
  },
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: ["Java", "SQL"],
  },
  {
    title: "Frameworks",
    icon: <FaCogs />,
    items: ["Selenium", "Maven", "TestNG"],
  },
  {
    title: "Skills",
    icon: <FaUserTie />,
    items: ["Performance Testing", "Manual Testing", "Automation Testing", "API Testing", "SDLC", "STLC"],
  },
  {
    title: "Testing Types",
    icon: <FaVial />,
    items: ["Functionality", "UI", "Adhoc", "Black Box", "Regression", "Integration", "Smoke", "Sanity", "Stress", "Load"],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="py-0 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side - Category List */}
          <div className="flex flex-col space-y-4">
            {/* Mobile Dropdown */}
            <div className="md:hidden">
              <select
                value={selectedCategory.title}
                onChange={(e) => {
                  const category = skillCategories.find((c) => c.title === e.target.value);
                  if (category) setSelectedCategory(category);
                }}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {skillCategories.map((category, index) => (
                  <option key={index} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex flex-col space-y-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  onMouseEnter={() => setHoveredCategory(category.title)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`flex items-center space-x-3 p-3 rounded-lg text-left transition group
                    ${selectedCategory.title === category.title
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
                >
                  {/* Motion Icon */}
                  <motion.span
                    className="text-2xl"
                    animate={{
                      rotate: hoveredCategory === category.title ? 15 : 0,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {category.icon}
                  </motion.span>

                  <span className="text-lg">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Category Details */}
          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-6">
                  <span className="text-blue-600 text-3xl mr-3">{selectedCategory.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-800">{selectedCategory.title}</h3>
                </div>

                {/* Modify the list to display in 2 columns with bullet points */}
                <ul className="list-disc list-inside grid grid-cols-2 gap-4 text-gray-700">
                  {selectedCategory.items.map((item, idx) => (
                    <li key={idx} className="hover:text-gray-900 transition">{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
