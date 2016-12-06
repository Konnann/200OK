import React, {Component} from "react";

export default class ProfileMenu extends Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                    {this.props.children}
            </ul>
        );
    }
}
