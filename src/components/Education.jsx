import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationDetails = [
  {
    institution: "Lovely Professional University, Punjab",
    degree: "B.Tech. in Mechanical Engineering",
    duration: "August 2016 - May 2019",
  },
  {
    institution: "Guru Nanak Dev Co-Ed. Polytechnic, New Delhi",
    degree: "Diploma in Mechanical Engineering",
    duration: "August 2013 - May 2016",
  },
  {
    institution: "Rajkiya Sarvodaya Bal Vidyalaya, New Delhi",
    degree: "X (CBSE)",
    duration: "June 2012 - March 2013",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-6 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-2 pb-2 border-blue-500">
          Education
        </h2>

        <div className="space-y-6">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3 text-blue-600 font-semibold text-lg">
                  <FaGraduationCap className="text-xl" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <FaCalendarAlt className="text-lg" />
                  <span>{edu.duration}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
