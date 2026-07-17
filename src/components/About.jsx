import React from "react";
import { easeOut, motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
            />
          </div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">I am passionate about full-stack web development and love creating modern, responsive, and user-friendly web applications. My journey started with learning the fundamentals of web development, and as my curiosity grew, I gradually explored both frontend and backend development. Over time, I discovered how different technologies work together to build complete, scalable applications, which inspired me to pursue full-stack development.</p>
              <p className="text-gray-300 mb-12">I enjoy solving real-world problems through code, learning new technologies, and continuously improving my skills. Whether it's designing intuitive user interfaces or building efficient backend systems, I am always excited to take on new challenges and grow as a developer. My goal is to create impactful digital experiences while continuously learning and evolving in the world of software development.</p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  aboutInfo.map((data, index) => (
                    <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                        <div className="text-purple text-4xl mb-4">
                          <data.icon />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                        <p className="text-gray-400">{data.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;