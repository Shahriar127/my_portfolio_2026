import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { certificationData } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="certifications"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Certifications
        </h2>

        <p
          className={
            darkMode
              ? "mt-6 text-center text-lg text-gray-700"
              : "mt-6 text-center text-lg text-gray-300"
          }
        >
          Professional certifications and achievements validating my expertise.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificationData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={
                darkMode
                  ? "rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  : "rounded-2xl border border-gray-700 bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              }
            >
              <div className="relative w-full h-64 bg-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    {cert.stack}
                  </span>
                </div>
                <h5
                  className={
                    darkMode
                      ? "mt-4 text-2xl font-bold tracking-tight text-gray-900"
                      : "mt-4 text-2xl font-bold tracking-tight text-white"
                  }
                >
                  {cert.title}
                </h5>
                <p
                  className={
                    darkMode
                      ? "mt-3 text-base text-gray-700"
                      : "mt-3 text-base text-gray-300"
                  }
                >
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
