import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav/Nav'
import HomePage from './HomePage/HomePage'

function App() {
    return(
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" component={HomePage}/>
        </div> 
      </Router>
    );
  }

  export default App;
