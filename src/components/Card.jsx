import React from "react";
import { motion } from "framer-motion";

const Card = ({ project, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={
        darkMode
          ? "rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          : "rounded-2xl border border-gray-700 bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
            {project.stack}
          </span>
        </div>
        <h5
          className={
            darkMode
              ? "mt-4 text-2xl font-bold tracking-tight text-gray-900"
              : "mt-4 text-2xl font-bold tracking-tight text-white"
          }
        >
          {project.title}
        </h5>
        <p
          className={
            darkMode
              ? "mt-3 text-base text-gray-700"
              : "mt-3 text-base text-gray-300"
          }
        >
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center py-2 px-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View Project
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
