// src/HompePage.js
import React from 'react';
// import data from '../services-data.json'
import Jumbotron from '../Jumbotron/Jumbotron'


function HomePage() {

  // deconstruct hours here
  // const services = data.map(({ title, desc, images, features }, i) => {

  //   return (
  //     <services
  //       id={i}
  //       key={title}
  //       name={title}
  //       desc={desc}
  //       image={images[0]}
  //       features={features} // add a new prop for hours here
  //     />
  //   )
  // })

  return (
    <div className="HomePage">
      <Jumbotron />
    </div>
  )
}

export default HomePage