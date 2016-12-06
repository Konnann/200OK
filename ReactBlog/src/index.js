import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './components/Profile/profile.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home/HomeController"
import Register from "./components/Register/RegisterController"
import Login from "./components/Login/LoginController";
import Logout from './components/Logout/LogoutController';
import Profile from "./components/Profile/ProfilePage";
import Create from "./components/Post/CreatePost";
import MyPosts from "./components/Post/MyPosts";


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="my-profile" component={Profile}>
                <Route path="create" component={Create}/>
                <Route path="my-posts" component={MyPosts}/>
            </Route>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
