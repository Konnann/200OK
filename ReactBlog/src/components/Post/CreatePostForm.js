import React, {Component} from 'react';

export default class CreatePostForm extends Component {
    render() {
        return (
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group row">
                        <h1>Create post</h1>
                        <input
                            className="form-control"
                            type="text"
                            id="post-title"
                            placeholder="Title"
                            name="title"
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group row">
                        <textarea
                            id="post-content"
                            className="form-control col-md-4"
                            rows="10"
                            name="content"
                            onChange={this.props.onChange}
                            placeholder="Write your heart out"
                        />
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-info button col-md-12" name="content">Create</button>
                    </div>
                </form>
           )
    }
}

