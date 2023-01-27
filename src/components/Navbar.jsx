import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/navbar.scss'

function Navbar() {
  return (
          <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      id="home_navbar">
      <div className="container-fluid">
        <img    
          src="/assets/gms_logo_w_r.svg"
          alt="nav_logo"
          id="navlogo"
          style={{width: "130px", height: "80px"}}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            id="ul"
          >
            <li className="nav-item" id="li">
              <NavLink
                className="nav-link active"
                id="nl"
                aria-current="page"
                to="/news"
                style={{ color: "white" }}
              >
                News
              </NavLink>
            </li>
            <li className="nav-item" id="li">
              <NavLink
                className="nav-link"
                id="nl"
                to="/vision"
                style={{ color: "white" }}
              >
                Vision
              </NavLink>
            </li>
            <li className="nav-item" id="li">
              <NavLink
                className="nav-link"
                id="nl"
                to="/login"
                style={{ color: "white" }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
     </nav>
  )
}

export default Navbar