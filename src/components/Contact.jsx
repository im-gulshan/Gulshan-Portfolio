import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-4 px-6 bg-white">
    <motion.div
      className="max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 border-b-2 border-blue-500 pb-3">
        Contact Me
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 text-blue-600 text-lg"
        >
          <a
            href="mailto:kgulshan230@outlook.com"
            className="hover:text-blue-800 transition-transform duration-300 hover:scale-110"
          >
            <MdEmail className="text-3xl" />
          </a>
          <a
            href="mailto:kgulshan230@outlook.com"
            className="hover:underline hover:text-blue-800"
          >
            kgulshan230@outlook.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 text-blue-600 text-lg"
        >
          <a
            href="https://www.linkedin.com/in/gulshan98/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gulshan98/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-800"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
