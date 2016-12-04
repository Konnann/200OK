import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/navbar'
import {Link} from 'react-router';

class App extends Component {
  render() {
    return(
      <div>
          <Navbar>
            <div className="btn-group">
              <li className="nav-item" style={{paddingTop:'7px'}}>
                <Link to="login" className="btn btn-success">Make yourself at home</Link>
              </li>
            </div>
          </Navbar>
        <div className="container">
          {this.props.children}

        </div>
      </div>
    );
  }
}

export default App;
