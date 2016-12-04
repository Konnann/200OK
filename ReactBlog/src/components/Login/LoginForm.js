import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <div id="loginForm" className="text-center center-block bg-info">
                <h3>Enter your home</h3>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            placeholder="Email"
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="username"
                            placeholder="Password"
                            onChange={this.props.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" >Log In</button>
                </form>
            </div>
        )
    }
}