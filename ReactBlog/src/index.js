import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import Home from "./components/Home/HomeController"
import Register from "./components/Register/RegisterController"
import Login from "./components/Login/LoginController";
import Logout from './components/Logout/LogoutController';

ReactDOM.render(
    <Router history={browserHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
        </Router>
    </Router>,
    document.getElementById('root')
);
