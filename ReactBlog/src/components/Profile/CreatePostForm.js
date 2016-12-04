import React, {Component} from 'react';

export default class CreatePostForm extends Component {
    render() {
        return (
            <div className="create-form" >
                <form onSubmit={this.props.onSubmit}>
                    <span>Create post</span>
                    <input
                        type="text"
                        id="post-title"
                        name="title"
                        onChange={this.props.onChange}
                        placeholder="Title"
                    />
                    <br/>
                    <textarea
                        id="post-content"
                        name="content"
                        onChange={this.props.onChange}
                        placeholder="Write your heart out"
                    />
                    <br/>
                    <button type="submit" className="btn btn-info button" name="content">Create</button>
                </form>
            </div>)
    }
}

