import React from "react";
import "./Nav.css";
import {NavLink} from "react-router-dom";
const style={
  activelink:{textDecoration:"none",fontWeight:"bold"}
}

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
            <NavLink activeStyle={style.activelink} exact to="/"className="nav-link" href="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={style.activelink} to="/projects" className="nav-link" href="/">
              Web Projects 
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink activeStyle={style.activelink} to="/photography"className="nav-link" href="/">
              Photography
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink activeStyle={style.activelink} to="/contact"className="nav-link" href="/">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};
export default Nav;
