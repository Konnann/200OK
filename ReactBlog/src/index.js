import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import Home from "./components/Home/HomePage"
import Register from "./components/Register/RegisterController"
import Login from "./components/Login/LoginController";

ReactDOM.render(
    <Router history={browserHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
        </Router>
    </Router>,
    document.getElementById('root')
);
