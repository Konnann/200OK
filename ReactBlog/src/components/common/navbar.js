import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
    render() {
        return(

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">200OK</Link>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        {this.props.children}
                    </ul>
                </div>
            </nav>

        )
    }
}