import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBookOpen } from "react-icons/fa";

// Education details array
const educationDetails = [
  {
    title: "Bachelor of Technology",
    institution: "Lovely Professional University, Punjab",
    year: "Aug 2016 - May 2019",
    degree: "Mechanical Engineer",
    icon: <FaGraduationCap />,
  },
  {
    title: "Diploma in Mechanical Engineering",
    institution: "Guru Nanak Dev Co-Ed. Polytechnic, New Delhi",
    year: "August 2013 - May 2016",
    icon: <FaUniversity />,
  },
  {
    title: "X (CBSE)",
    institution: "Rajkiya Sarvodaya Bal Vidyalaya, New Delhi",
    year: "June 2012 - March 2013",
    icon: <FaBookOpen />,
  },
];

// Category selector for education
const EducationSelector = ({
  selected,
  setSelected,
  hovered,
  setHovered,
}) => (
  <>
    {/* Mobile Dropdown */}
    <div className="md:hidden">
      <label htmlFor="education-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Education
      </label>
      <select
        id="education-select"
        value={selected.title}
        onChange={(e) => {
          const selectedItem = educationDetails.find((item) => item.title === e.target.value);
          if (selectedItem) setSelected(selectedItem);
        }}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {educationDetails.map((item, index) => (
          <option key={index} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>

    {/* Desktop Buttons */}
    <div className="hidden md:flex flex-col space-y-4">
      {educationDetails.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => setSelected(item)}
          onMouseEnter={() => setHovered(item.title)}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          aria-selected={selected.title === item.title}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-3 p-3 rounded-lg text-left transition group
            ${selected.title === item.title
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
        >
          <motion.span
            className="text-2xl"
            animate={{
              rotate: hovered === item.title ? 15 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.span>
          <span className="text-lg">{item.title}</span>
        </motion.button>
      ))}
    </div>
  </>
);

// Education detail card
const EducationCard = ({ data }) => (
  <motion.div
    key={data.title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-50 p-8 rounded-xl shadow-md"
  >
    <div className="flex items-center mb-6">
      <span className="text-blue-600 text-3xl mr-3">{data.icon}</span>
      <h3 className="text-2xl font-semibold text-gray-800">{data.title}</h3>
    </div>
    {data.degree && (
      <p className="text-gray-600 font-medium text-lg mb-1">{data.degree}</p>
    )}
    <p className="text-gray-700 text-lg">{data.institution}</p>
    <p className="text-gray-500 text-md">{data.year}</p>
  </motion.div>
);

// Main Education component
const Education = () => {
  const [selected, setSelected] = useState(educationDetails[0]);
  const [hovered, setHovered] = useState(null);

  const renderedCard = useMemo(() => <EducationCard data={selected} />, [selected]);

  return (
    <section id="education" className="py-10 px-6 md:px-16 bg-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 border-b-2 pb-2 border-blue-500">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Selector (Left) */}
          <div className="flex flex-col space-y-4">
            <EducationSelector
              selected={selected}
              setSelected={setSelected}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>

          {/* Details (Right) */}
          <div className="col-span-2">
            <AnimatePresence mode="wait">{renderedCard}</AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
