import React, {Component} from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";
import {Link} from 'react-router';

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <div className="content">
                <ProfileHeader />
                    <ProfileMenu>
                        <li><Link to="/my-profile/create">Create Post</Link></li>
                        <li><Link to="/my-profile/my-posts">My Posts</Link></li>
                        <li><Link to="#">Liked Posts</Link></li>
                    </ProfileMenu>
                    <div className="profile-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
