// src/Project.js

import React from 'react'
import './Footer.css';
import { NavLink } from "react-router-dom";

const date = new Date().getFullYear()

function Footer() {
    return (
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer Content</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>


            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <NavLink class="nav-link" to="/">
                      Home <span class="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink class="nav-link" to="/services">
                      Services
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>



        <div class="text-center p-3 copyright">
          © {date} Copyright:
          <NavLink class="text-white" to='/'>
            PlantDaddy
          </NavLink>
        </div>

      </footer>

      
    );
  }

export default Footer