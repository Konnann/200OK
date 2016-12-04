import React, {Component} from "react";

export default class ProfileMenu extends Component {
    render() {
        return (
            <ul className="profile-menu">
                    {this.props.children}
                
            </ul>
        );
    }
}
