import React, {Component} from "react";
import {loadMyPosts} from '../../models/postsModel'
import Post from '../common/postView'

export default class MyPosts extends Component {

    constructor(props){
        super(props);
        this.state = { posts: [] };
        this.bindEventHandlers();
    }

    componentDidMount() {
        loadMyPosts(this.onLoadSuccess);
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response){
        let posts = [];
        for(let entry of response) {
            let post = {};
            post.id = entry._id;
            post.content = entry.content;
            post.title = entry.title;
            post.authorName = entry.authorName;
            post.postedOn = new Date(entry._kmd.ect).toLocaleString();
            post.canEdit = true;
            posts.push(post);
        }
        this.setState({posts: posts});
        console.log(this.state.posts)
    }
    
    render(){
        let entries = [];
        this.state.posts.forEach(function (post) {
           entries.push(<Post
               key={post.id}
               postId={post.id}
               by={post.authorName}
               postTitle={post.title}
               postedOn={post.postedOn}
               postContent={post.content}
                canEdit={post.content}/>)
        });

        return(
            <div>
                {entries}
            </div>
        )
    }
}



