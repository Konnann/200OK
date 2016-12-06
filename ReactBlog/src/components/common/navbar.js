import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
    render() {
        if(!this.props.isLogged) {
            return null;
        }

        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/dashboard" className="navbar-brand">200OK</Link>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        <li><Link to="/my-profile" className="">Profile</Link></li>
                        <li><Link to="/my-profile/my-posts" className="">My Posts</Link></li>
                        <li><Link to="logout" className="">Logout</Link></li>
                    </ul>
                </div>
            </nav>

        )
    }
}