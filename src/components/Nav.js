import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
      <i class="fas fa-user"></i>      Sagar Panwar <span class="designation">Front End Developer</span>
      </a>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="pages" className="navbar-nav ml-auto items">
          <li className="nav-item active">
            <Link to="/"className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" href="/">
              Web Projects 
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/photography"className="nav-link" href="/">
              Photography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
