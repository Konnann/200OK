import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from "./components/Home/HomePage"
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
    <Router history={browserHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Home}/>
        </Router>
    </Router>,
    document.getElementById('root')
);
