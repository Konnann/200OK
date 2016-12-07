import React, {Component} from "react";
import CreatePostForm from "./CreatePostForm"
import {create} from '../../models/postsModel'

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state ={title:'',content: '', submitDisabled:false};
        this.bindEventHandlers();
    }

    bindEventHandlers(){
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        create(this.state.title, this.state.content, this.onSubmitResponse);

    }

    onSubmitResponse(response){
        if(response === true) {
            this.context.router.push('/my-profile/my-posts');
        } else {
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
            <CreatePostForm
                title={this.state.title}
                content={this.state.content}
                onChange={this.onChange}
                onSubmit={this.onSubmit}/>
            </div>

        )
    }
}

CreatePost.contextTypes = {
    router: React.PropTypes.object
};
