import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
                <form id="login-form" onSubmit={this.props.onSubmit} style={{display: 'block'}}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <button id="loginSubmit" type="submit" className="form-control btn btn-login" >Log In</button>
                            </div>
                        </div>
                    </div>
                </form>
        )
    }
}