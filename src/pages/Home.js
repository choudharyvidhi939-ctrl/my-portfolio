import React from "react";
import "./Home.css"; // custom styles for layout
import profilePic from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="home-container">
      {/* Left Side - About Me */}
      <div className="home-text">
        <h1>Hi, I'm Vidhi Choudhary 👩‍💻</h1>
        <p>
          I am an enthusiastic web developer currently exploring and learning 
          <b> React, HTML, CSS, JavaScript, PHP,</b> and <b>Python</b>.  
          My journey into tech is fueled by curiosity and a passion for 
          building interactive, creative, and user-friendly web applications.  
        </p>
        <p>
          Apart from coding, I enjoy experimenting with new ideas, 
          continuously challenging myself to improve my problem-solving 
          skills. My goal is to work on impactful projects, collaborate 
          with like-minded people, and contribute to the tech community.  
        </p>
        <p>
          This portfolio is a reflection of my learning journey, 
          and I am excited to keep adding more projects and experiences 
          as I grow in the world of development. 🚀
        </p>

        {/* Skills Section */}
        <div className="skills">
          <h2>My Skills ⚡</h2>
          <div className="skills-grid">
            <div className="skill">⚛ React</div>
            <div className="skill">🔶 HTML5</div>
            <div className="skill">🎨 CSS3</div>
            <div className="skill">⚡ JavaScript</div>
            <div className="skill">🐘 PHP</div>
            <div className="skill">🐍 Python</div>
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="home-image">
        <img src={profilePic} alt="Vidhi Choudhary" />
      </div>
    </div>
  );
}

export default Home;
