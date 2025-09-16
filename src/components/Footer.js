import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Portfolio | Built with React</p>
      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
