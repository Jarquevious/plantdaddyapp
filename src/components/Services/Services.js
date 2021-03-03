// src/Project.js

import React from 'react'
import './Services.css';
import { NavLink } from "react-router-dom";

function Services() {
    return (
        <div class="container p-5">
            <div class="row justify-content-center">

                <div class="col-sm">
                    <div class="card">
                        <img class="card-img-top" src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/water-plants.jpg" alt="watering"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink class="btn btn-primary" to="/">
                                Book 
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="card" >
                        <img class="card-img-top" src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/water-plants.jpg" alt="Plant "></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink class="btn btn-primary" to="/">
                                Book 
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="card" >
                        <img class="card-img-top" src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/water-plants.jpg" alt="Plant "></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink class="btn btn-primary" to="/">
                                Book 
                            </NavLink>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
  }

export default Services