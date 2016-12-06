import React, {Component} from 'react';

export default class Settings extends Component {


    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <h4>Avatar image link</h4>
                    <div className="input-group">
                        <span className="input-group-addon">https://imagelink.com</span>
                        <input
                            onChange={this.props.onChange}
                            name="avatarImage"
                            type="text"
                            className="form-control"/>
                    </div>
                    <hr/>
                    <h4>Cover image link</h4>
                    <div className="input-group">
                        <span className="input-group-addon">https://imagelink.com</span>
                        <input
                            onChange={this.props.onChange}
                            name="coverImage"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-info col-md-offset-5  col-md-2">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
