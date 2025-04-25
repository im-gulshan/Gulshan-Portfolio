import { motion } from "framer-motion";
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
  return (
    <section id="skills" className="py-10 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <span className="text-blue-600 text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx} className="hover:text-gray-800 transition">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
