import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/navbar'
import {Link} from 'react-router';

class App extends Component {
  render() {
    return(
      <div className="container">
          <Navbar>
            <li className="navbar-brand">200OK</li>
            <li className="nav-item"><Link to="#" className="navbar-link">Home</Link></li>
            <li className="nav-item"><Link to="#" className="navbar-link">LogIn</Link></li>
            <li className="nav-item"><Link to="#" className="navbar-link">Register</Link></li>
          </Navbar>

      </div>
    );
  }
}

export default App;
