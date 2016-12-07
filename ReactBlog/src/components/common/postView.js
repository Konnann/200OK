import React, {Component} from 'react';
import {Link} from 'react-router';
import {deletePost} from '../../models/postsModel';


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.deletePostWrapper = this.deletePostWrapper.bind(this);
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
    }

    deletePostWrapper() {
        deletePost(this.props.postId, this.onDeleteSuccess);
    }

    onDeleteSuccess(){
        this.context.router.push('/my-profile');
        this.context.router.push('/my-profile/my-posts');
    }


    render() {
        return (
            <div id={this.props.postId} className="post panel panel-default">
                <div className="panel-heading">
                    <p className="pull-right ">
                        by {this.props.by} on <small>{this.props.postedOn}</small>
                        <button className="btn btn-link" onClick={this.deletePostWrapper}>X</button>
                    </p>
                    <div className="panel-title col-md-0">
                        {this.props.postTitle}
                    </div>
                    <div className="row">
                        <small className="text-muted col-md-1">
                            <Link to={"/my-profile/editPost/" + this.props.postId}>Edit</Link>
                        </small>
                    </div>
                </div>
                <div className="panel-body">
                    {this.props.postContent}
                </div>
            </div>
        )
    }
}

Post.contextTypes = {
    router: React.PropTypes.object
};
