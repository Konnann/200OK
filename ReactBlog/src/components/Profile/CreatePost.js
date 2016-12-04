import React, {Component} from "react";

export default class CreatePost extends Component {
    render() {
        return (
            <div className="create-form">
                <div>
                    <span>Create post</span>
                    <input type="text" id="post-title" />
                    <br/>
                    <textarea id="post-content"/>
                </div>
            </div>
        )
    }
}

