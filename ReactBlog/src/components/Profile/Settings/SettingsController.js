import React, {Component} from 'react';
import SettingsForm from './SettingsForm'
import {updateSettings} from '../../../models/userModel'

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {coverImage: '', avatarImage: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        switch (event.target.name) {
            case 'coverImage':
                this.setState({coverImage: event.target.value});
                break;
            case 'avatarImage':
                this.setState({avatarImage: event.target.value});
                break;
            default:
                break;
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(updateSettings(this.state));
    }

    render() {
        return(
            <SettingsForm
                avatarImage={this.state.avatarImage}
                profileImage={this.state.coverImage}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

Settings.contextTypes = {
    avatarImage: React.PropTypes.string,
    coverImage: React.PropTypes.string
};