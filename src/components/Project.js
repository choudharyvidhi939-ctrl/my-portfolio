import React from "react";

function Project({ title, description, tech, type, domain }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Domain:</strong> {domain}</p>
    </div>
  );
}

export default Project;
