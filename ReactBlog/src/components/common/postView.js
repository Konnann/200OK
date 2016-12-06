import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        return (
            <div id={this.props.postId} className="post panel panel-default">
                <div className="panel-heading">
                    <p className="pull-right ">by {this.props.by} on <small>{this.props.postedOn}</small></p>
                    <div className="panel-title col-md-0">
                        {this.props.postTitle}
                    </div>
                    <div className="row">
                        <small className="text-muted col-md-1">
                            <a href={"/my-profile/editPost/" + this.props.postId}>Edit</a>
                        </small>
                        <small className="text-muted col-md-1">
                            <a href={"/editPost/" + this.props.postId}>Delete</a>
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