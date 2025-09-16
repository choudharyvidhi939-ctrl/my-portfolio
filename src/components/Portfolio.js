import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    { title: "FS Practical App", description: "CA2 functional app", tech: "React, CSS", type: "Course", domain: "FS" },
    { title: "Portfolio Website", description: "Showcasing my work", tech: "React, MaterialUI", type: "Personal", domain: "UI/UX" },
    { title: "DBMS Tool", description: "Database project", tech: "MySQL, Node.js", type: "Course", domain: "DBMS" },
    { title: "E-commerce Site", description: "Personal project", tech: "React, Firebase", type: "Personal", domain: "FS" },
  ];

  const [filters, setFilters] = useState({ type: [], domain: [] });

  const handleCheckbox = (category, value) => {
    setFilters((prev) => {
      const newCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newCategory };
    });
  };

  const filteredProjects = projects.filter((p) => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(p.type);
    const domainMatch = filters.domain.length === 0 || filters.domain.includes(p.domain);
    return typeMatch && domainMatch;
  });

  return (
    <div id="projects" className="portfolio fade-in">
      <h2>My Projects</h2>

      {/* Filters */}
      <div className="filters">
        <div>
          <h4>Filter by Type</h4>
          <label>
            <input type="checkbox" onChange={() => handleCheckbox("type", "Course")} /> Course
          </label>
          <label>
            <input type="checkbox" onChange={() => handleCheckbox("type", "Personal")} /> Personal
          </label>
        </div>

        <div>
          <h4>Filter by Domain</h4>
          <label>
            <input type="checkbox" onChange={() => handleCheckbox("domain", "FS")} /> FS
          </label>
          <label>
            <input type="checkbox" onChange={() => handleCheckbox("domain", "DBMS")} /> DBMS
          </label>
          <label>
            <input type="checkbox" onChange={() => handleCheckbox("domain", "UI/UX")} /> UI/UX
          </label>
        </div>
      </div>

      {/* Projects */}
      <div className="portfolio-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p, i) => <Project key={i} {...p} />)
        ) : (
          <p>No projects match the selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
