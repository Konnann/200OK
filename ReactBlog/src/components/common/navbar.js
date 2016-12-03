import React, {Component} from 'react';

export default class Nabbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-faded pull-right">
                <ul className="nav navbar-nav">
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}