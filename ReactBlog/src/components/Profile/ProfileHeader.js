import React, {Component} from "react";
import $ from 'jquery'

export default class ProfileHeader extends Component {
    componentDidMount() {
        let url = `url(${this.props.coverImage})`;
        $("#cover-photo").css("background", url);
    }

    render() {
        return (
            <div className="container">
               <div id="cover-photo" className="jumbotron">
                   <h1>{this.props.username}</h1>
               </div>
                <div id="avatar-photo" className="profile-photo text-center">
                    <img alt="avatar" src={this.props.avatarImage} className="img-circle" width="128px" height="128px"/>
                </div>
            </div>
        )
    }
}