import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav/Nav'
import HomePage from './HomePage/HomePage'
import Services from './Services/Services'
import Footer from './Footer/Footer'

function App() {
    return(
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" component={HomePage}/>
          <Services />
          <Footer />
        </div> 
      </Router>
    );
  }

  export default App;
