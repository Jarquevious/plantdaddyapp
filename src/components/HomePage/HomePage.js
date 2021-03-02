// src/HompePage.js
import React, { useState } from 'react';
import data from '../services-data.json'


function HomePage() {

  // deconstruct hours here
const services = data.map(({ title, desc, images, features }, i) => {

  return (
    <services
      id={i}
      key={title}
      name={title}
      desc={desc}
      image={images[0]}
      features={features} // add a new prop for hours here
    />
  )
})

  return (
    <div className="HomePage">
      { services }
    </div>
  )
}

export default HomePage