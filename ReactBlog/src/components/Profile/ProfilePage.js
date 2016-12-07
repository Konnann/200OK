import React, {Component} from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";
import {Link} from 'react-router';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {coverImage: sessionStorage.getItem('cover'), avatarImage: sessionStorage.getItem('avatar')}
    }

    componentDidMount() {
        this.setState({coverImage: sessionStorage.getItem('cover'), avatarImage: sessionStorage.getItem('avatar')})
    }

    render() {
        return (
            <div>
                <div className="">
                <ProfileHeader
                    coverImage={this.state.coverImage}
                    avatarImage={this.state.avatarImage}
                    username={sessionStorage.getItem("username")}
                />
                   <div className="row">
                       <div id="sidebar" className="col-md-2">
                           <ProfileMenu>
                               <li><Link to="/my-profile/create" className="btn btn-default">Create Post</Link></li>
                               <li><Link to="/my-profile/my-posts" className="btn btn-default">My Posts</Link></li>
                               <li><Link to="/my-profile/settings" className="btn btn-default">Settings</Link></li>
                           </ProfileMenu>
                       </div>
                       <div className="col-md-6 col-md-offset-1">
                           {this.props.children}
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

