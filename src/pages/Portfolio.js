import React, { useState } from "react";

const projects = [
  { 
    title: "FS Practical App", 
    type: "Course", 
    domain: "FS", 
    tech: "React, CSS", 
    link: "#" 
  },
  { 
    title: "Nail Studio Registration", 
    type: "Personal", 
    domain: "DBMS", 
    tech: "PHP, Xampp, HTML", 
    link: "#" 
  },
  { 
    title: "Online Food Ordering System", 
    type: "Personal", 
    domain: "Software Engineering", 
    tech: "HTML, CSS, JS", 
    link: "#" 
  },
  { 
    title: "Movie Playlist Manager", 
    type: "Personal", 
    domain: "Python", 
    tech: "Python (.py)", 
    link: "#"   // 👉 later you can link to your GitHub repo or project file
  }
];

function Portfolio() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>My Projects 💼</h2>
      <p>
        Here are some of the projects I’ve worked on during my learning journey. 
        Each project reflects my progress in using technologies like 
        <b> React, HTML, CSS, JavaScript, PHP, and Python</b>. 
        More exciting projects are coming soon!
      </p>

      {/* Dropdown Filter */}
      <label>Filter by Domain: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="FS">FS</option>
        <option value="Web Dev">Web Dev</option>
        <option value="Python">Python</option>
      </select>

      {/* Projects Grid */}
      <div className="projects">
        {projects
          .filter((p) => !filter || p.domain === filter)
          .map((p, i) => (
            <div key={i} className="card">
              <h3>{p.title}</h3>
              <p><b>Tech:</b> {p.tech}</p>
              <p>{p.type} | {p.domain}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
