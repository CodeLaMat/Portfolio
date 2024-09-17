import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../styles/FullStackProjects.module.scss";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const FullStackProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://eyvaz-alishov-default-rtdb.firebaseio.com/projects.json")
      .then((response) => {
        const allProjects = Object.values(response.data);

        const fullStackProjects = allProjects.filter(
          (project) => project.category === "full-stack"
        );
        setProjects(fullStackProjects);
        setIsLoading(false);
        console.log("Full stack projects: " + fullStackProjects);
      });
  }, []);

  return (
    <div className={classes.fsProjects}>
      <h2>Full Stack Development Projects</h2>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <div className={classes.projects_container}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              github={project.github}
              external={project.external}
              date={project.date}
              techs={project.techs}
              company={project.company}
              showInProjects={project.showInProjects}
              description={project.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FullStackProjects;
