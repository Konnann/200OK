import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './components/Profile/profile.css'
import Home from "./components/Home/HomePage"
import Profile from "./components/Profile/ProfilePage"
import Create from "./components/Profile/CreatePost"
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="my-profile" component={Profile}>
                <Route path="create" component={Create}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
