import React, { Component } from 'react';
import './App.css';
import './components/Profile/profile.css'
import Navbar from './components/common/navbar'
import {Link} from 'react-router';
import observer from './models/observer'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {isLogged: false, username: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem('username');
        if (name) {
            this.setState({isLogged: true, username: name});
        } else {
            this.setState({isLogged: false, username: ''});
        }
    }

    render() {
        let navbar = {};
        if (!this.state.isLogged) {
            navbar = (
                <Navbar isLogged={this.state.isLogged}>
                    <div className="btn-group">
                        <li className="nav-item" style={{paddingTop:'7px'}}>
                            <Link to="login" className="btn btn-success">Make yourself at home</Link>
                        </li>
                    </div>
                </Navbar>
            )
        } else {
            navbar = (
                <Navbar isLogged={this.state.isLogged}>
                    <div className="">
                        <li className="btn-group" style={{paddingTop:'7px'}}>
                            <Link to="/my-profile" className="btn btn-info nav-item">Profile</Link>
                            <Link to="/my-profile/my-posts" className="btn btn-info nav-item">My Posts</Link>
                            <Link to="logout" className="btn btn-danger nav-item">Logout</Link>
                        </li>
                    </div>
                </Navbar>
            )
        }

        return(
            <div>
                {navbar}
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
