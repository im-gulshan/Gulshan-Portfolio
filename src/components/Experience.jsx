import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Engineer II, Quality Engineering",
    company: "S&P Global",
    duration: "Oct 2024 – Present",
    description: "Working on automation testing, performance testing, and CI/CD integration using modern tools and frameworks.",
  },
  {
    role: "QA Engineer",
    company: "Tata Consultancy Services",
    duration: "Jul 2021 – Oct 2024",
    description: "Performed manual and automation testing using Selenium, Java, Postman, and JMeter. Worked on Agile teams delivering quality software solutions.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-blue-600 font-semibold text-lg">
                  <FaBuilding className="text-xl" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <FaCalendarAlt className="text-lg" />
                  <span>{exp.duration}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{exp.role}</h3>
              <p className="text-gray-600 text-lg">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
