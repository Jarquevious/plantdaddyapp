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
                            <h5 class="card-title">Virtual Consultation</h5>
                            <p class="card-text">Questions about lighting? Watering? Air flow? Schedule a virtual consultation with us and we will talk about all of it!</p>
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
                            <h5 class="card-title">Watering </h5>
                            <p class="card-text">Don’t have time to water the plants?  We make either weekly or bi-weekly trips to you to water your plants. You don't have to worry!</p>
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
                            <h5 class="card-title">Plant Sitter</h5>
                            <p class="card-text">Traveling for a few days? No worries! Our Care Givers loves to host your plants and provide care for them.</p>
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
                            <h5 class="card-title">Fertilizing</h5>
                            <p class="card-text">Don’t have time to fertilize the plants? We make either weekly or bi-weekly trips to you to fertilize your plants. You don't have to worry!</p>
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
                            <h5 class="card-title">Styling</h5>
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
                            <h5 class="card-title">Repotting</h5>
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