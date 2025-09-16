import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeclassname="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeclassname="active">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
