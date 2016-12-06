import React, {Component} from 'react';
import {getPostDetails, updatePost} from '../../models/postsModel'
import EdiPostForm from './EditPostForm'

export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDetailsSuccess = this.onDetailsSuccess.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        getPostDetails(this.props.params.id, this.onDetailsSuccess)
    }

    onDetailsSuccess(data) {
        this.setState(data);
    }

    onChange(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        updatePost(this.state, this.onSubmitSuccess)
    }

    onSubmitSuccess(data) {
        this.context.router.push("/my-profile/my-posts")
    }

    render() {
        return(
            <EdiPostForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                title={this.state.title}
                content={this.state.content}
            />
        )
    }
}

EditPost.contextTypes = {
    router: React.PropTypes.object
};