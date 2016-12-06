import React, {Component} from "react";
import {loadMyPosts} from '../../models/postsModel'


export default class MyPosts extends Component {

    constructor(props){
        super(props);
        this.state = { posts: [] };
        this.bindEventHandlers();
        loadMyPosts(this.onLoadSuccess());
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response){
        //if teams loaded successfully, filter them
        console.log(response);
        console.dir(response);

    }
    
    render(){

        return(
            <div>
                Posts
            </div>
        )
    }
}



