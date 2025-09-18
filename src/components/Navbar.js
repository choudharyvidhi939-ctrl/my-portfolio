import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side logo/title */}
      <div className="logo">My Portfolio</div>

      {/* Right side menu */}
      <ul className="nav-links">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
        </li>
        <li>
          <a href="/portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </li>
        <li>
          <a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a>
        </li>
        <li>
          <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
