import React, {Component} from "react";
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <Link to="register" className="btn btn-info">Or make your home</Link>
            </div>
        )
    }
}