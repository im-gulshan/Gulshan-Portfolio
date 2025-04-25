import { motion } from "framer-motion";

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
            src="/gulshan-kumar.jpg"
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
            Hello! I’m <strong className="text-blue-600">Gulshan Kumar</strong>, a passionate QA Engineer with hands-on experience in Automation, Performance, and Manual Testing. I love solving real-world problems through testing, collaborating with cross-functional teams, and ensuring top-notch software quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
