import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 mt-5 bg-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={`${process.env.PUBLIC_URL}/gulshan-kumar.jpg`}
            alt="Gulshan Kumar Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I'm <strong className="text-blue-600">Gulshan Kumar</strong>, a QA Engineer-II at <strong className="text-blue-600">S&amp;P Global</strong> with 6+ years of experience in Automation, Performance, API, and Manual Testing. Passionate about ensuring software quality, collaborating with teams, and always learning new technologies.
          </p>

          {/* Email and LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-8 text-blue-500 text-lg mt-6 justify-center md:justify-start"
          >
            {/* Email */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:kgulshan230@outlook.com"
                className="hover:text-blue-800 transition-transform duration-300 hover:scale-110"
              >
                <MdEmail className="text-2xl" />
              </a>
              <a
                href="mailto:kgulshan230@outlook.com"
                className="hover:underline hover:text-blue-800"
              >
                kgulshan230@outlook.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/gulshan98/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/gulshan98/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-800"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
