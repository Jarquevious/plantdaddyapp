import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light">
      <NavLink class="navbar-brand" to='/'>
        Plant Daddy
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ">
          <li class="nav-item active">
              <NavLink class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>

          <li class="nav-item dropdown">
            <NavLink
                class="nav-link dropdown-toggle"
                to="/services"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                
                aria-expanded="false"
              >
                Services
            </NavLink>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink class="dropdown-item" to="/consultation">
                Virtual Consultation
              </NavLink>
              <NavLink class="dropdown-item" to="/watering">
                Watering
              </NavLink>
              <NavLink class="dropdown-item" to="/plant-sitting">
                Plant Sitting
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
