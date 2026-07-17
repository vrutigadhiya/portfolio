import React from "react";

const Projectcard = ({ title, description, image, tech, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl hover:-translate-y-2 overflow-hidden transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        fetchPriority="high"
        className="w-full h-52 sm:h-56 md:h-60 object-contain rounded-t-2xl bg-dark-200 transition-all duration-500 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 tarnsition duration-300"
          >
            View Demo
          </a>
          <a
            href={code}
            className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
