import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-500"
        >
          <img
            src="/gulshan-kumar.jpg" // Replace with your actual photo path
            alt="Gulshan Kumar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed max-w-xl">
            Hello! I’m <strong>Gulshan Kumar</strong>, a passionate QA Engineer with experience in automation, performance, and manual testing. I believe in writing reliable test cases, breaking assumptions, and continuously learning modern tools to deliver high-quality software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
