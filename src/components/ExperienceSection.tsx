import React from "react";
import "./ProjectSection.scss";

const projects = [
  { id: 1, title: "Sample Project 1", tech: "React, TypeScript, HTML, CSS" },
  { id: 2, title: "Sample Project 2", tech: "React, TypeScript, HTML, CSS" },
  { id: 3, title: "Sample Project 3", tech: "React, TypeScript, HTML, CSS" },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <div className="projects__item" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
