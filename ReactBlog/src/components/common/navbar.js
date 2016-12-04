import React, {Component} from 'react';

export default class Nabbar extends Component {
    render() {
        return(
            <div display="block">
            <nav>
                <ul className="nav navbar-nav">
                    {this.props.children}
                </ul>
            </nav>
                </div>
        )
    }
}