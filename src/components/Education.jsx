import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../assets/assets";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="education"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Education</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A glimpse into my educational journey
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {educationData.map((data, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-purple"></div>

                {/* Box */}
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{data.degree}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xl md:text-sm">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{data.institute}</p>
                  <p className="text-gray-300">{data.description}</p>
                  <div className="mt-6">
                    <span className="inline-flex flex-wrap justify-center items-center text-center px-3 sm:px-6 py-2 text-sm sm:text-base border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300">
                      {data.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
