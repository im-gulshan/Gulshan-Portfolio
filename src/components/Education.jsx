import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBookOpen } from "react-icons/fa";  // Import icons

const educationDetails = [
  {
    title: "Bachelor of Technology",
    institution: "Lovely Professional University, Punjab",
    year: "Aug 2016 - May 2019",
    degree: "Mechanical Engineer",
    icon: <FaGraduationCap />  // Use an icon from React Icons
  },
  {
    title: "Diploma in Mechanical Engineering",
    institution: "Guru Nanak Dev Co-Ed. Polytechnic, New Delhi",
    year: "August 2013 - May 2016",
    icon: <FaUniversity />  // Use another icon
  },
  {
    title: "X (CBSE)",
    institution: "Rajkiya Sarvodaya Bal Vidyalaya, New Delhi",
    year: "June 2012 - March 2013",
    icon: <FaBookOpen />  // Use another icon
  }
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(educationDetails[0]);

  return (
    <section id="education" className="py-10 px-6 md:px-16 bg-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Education List */}
          <div className="flex flex-col space-y-4">
            {/* Education Buttons */}
            {educationDetails.map((education, index) => (
              <button
                key={index}
                onClick={() => setSelectedEducation(education)}
                className={`flex items-center space-x-3 p-3 rounded-lg text-left transition group
                  ${selectedEducation.title === education.title
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
              >
                <span className="text-xl">{education.icon}</span> {/* Render the icon */}
                <span className="text-lg font-medium">{education.title}</span>
              </button>
            ))}
          </div>

          {/* Right Side - Selected Education Details */}
          <div className="col-span-1 md:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEducation.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{selectedEducation.title}</h3>
                {selectedEducation.degree && (  // 👈 Conditional rendering
                  <p className="text-gray-600 font-medium text-lg mt-1">
                    {selectedEducation.degree}
                  </p>
                )}
                <p className="text-gray-600 text-xl">{selectedEducation.institution}</p>
                <p className="text-gray-500 text-lg">{selectedEducation.year}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
