import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="logo">SK.</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/">Project</NavLink>
        </li>
      </ul>
    </nav>
  );
};
