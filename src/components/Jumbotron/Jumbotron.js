import React from "react";
import './jumbotron.css';
import { NavLink } from "react-router-dom";

function Jumbotron() {
  return (
    <div class='container-fluid'>
      <div class="jumbotron">
        <div class='row p-5 box'>

            <h1 class="display-4 text-white">Local, Trusted Plant Care</h1>
            <hr class="my-4"></hr>
            
            <p class="text-white ">Book 5 star Plant Caregiver near you</p>
            
        </div>
        <div class="row mt-5 button">
          <NavLink class="btn btn-danger btn-lg text-white" to="/booking" >Book Plant Care</NavLink>
        </div>
      </div>
    </div>
    
  )
}

export default Jumbotron;
