import React, {Component} from 'react';
import {getAllPosts} from '../../models/postsModel'
import Post from '../common/postView'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: null};

        this.onSuccess = this.onSuccess.bind(this);
    }

    componentDidMount() {
        getAllPosts(this.onSuccess)
    }

    onSuccess(response) {
        let posts = [];
        for(let entry of response) {
            let post = {};
            post.id = entry._id;
            post.content = entry.content;
            post.title = entry.title;
            post.authorName = entry.authorName;
            post.postedOn = new Date(entry._kmd.ect).toLocaleString();
            posts.push(post);
        }
        posts = posts.sort((a,b) => b.postedOn - a.postedOn);
        console.log(posts)
        this.setState({posts: posts});
    }

    render() {
        if (this.state.posts) {
            let entries = [];
            this.state.posts.forEach(function (post) {
                entries.push(<Post
                    key={post.id}
                    postId={post.id}
                    by={post.authorName}
                    postTitle={post.title}
                    postedOn={post.postedOn}
                    postContent={post.content}/>)
            });
            return(
                <div>
                    {entries}
                    <div className="panel panel-default">
                        <div className="panel-heading">hello</div>
                    </div>
                </div>
            )
        }

        return (
            <div>Loading...</div>
        )
    }
}