import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectList = [
  {
    title: "Test Automation Dashboard",
    description: "A dashboard to visualize test execution reports using Selenium and Jenkins.",
    link: "#",
  },
  {
    title: "Performance Testing Suite",
    description: "Created using JMeter for high-load simulations with Grafana integration.",
    link: "#",
  },
  {
    title: "Bug Tracker Integration",
    description: "Integrated automated test results with Jira using REST APIs.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View Project <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
