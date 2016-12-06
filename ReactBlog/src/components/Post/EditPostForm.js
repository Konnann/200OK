import React, {Component} from 'react'

export default class EditPostForm extends Component {

    render() {
        return(
                <form className="" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <h3>Title</h3>
                        <input
                            onChange={this.props.onChange}
                            name="title"
                            className="form-control"
                            value={this.props.title}
                        />
                    </div>
                    <div className="form-group">
                        <h3>Content</h3>
                        <textarea
                            className="form-control"
                            name="content"
                            onChange={this.props.onChange}
                            value={this.props.content}
                            rows="10"
                        />
                    </div>
                    <button type="submit" className="btn btn-info col-md-12">Save</button>
                </form>
        )
    }
}