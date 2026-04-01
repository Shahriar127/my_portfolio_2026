import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projectData } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-16">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>

        <p
          className={
            darkMode
              ? "mt-6 text-center text-lg text-gray-700"
              : "mt-6 text-center text-lg text-gray-300"
          }
        >
          A curated collection of my major builds and experimental mini projects.
        </p>

        <div className="mt-14">
          <h4 className="text-3xl font-semibold text-blue-600">Large Projects</h4>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.large.map((project) => (
              <Card key={project.link} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h4 className="text-3xl font-semibold text-blue-600">Small Projects</h4>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.small.map((project) => (
              <Card key={project.link} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
