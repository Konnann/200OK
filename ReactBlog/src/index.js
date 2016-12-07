import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './components/Profile/profile.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home/HomeController"
import Register from "./components/Login/Register/RegisterController"
import Login from "./components/Login/LoginController";
import Logout from './components/Logout/LogoutController';
import Profile from "./components/Profile/ProfilePage";
import Create from "./components/Post/CreatePost";
import MyPosts from "./components/Post/MyPosts";
import Dashboard from "./components/Home/Dashboard"
import Settings from "./components/Profile/Settings/SettingsController"
import EditPost from "./components/Post/EditPost"

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="my-profile" component={Profile}>
                <Route path="settings" component={Settings} />
                <Route path="create" component={Create}/>
                <Route path="my-posts" component={MyPosts}/>
                <Route path="editPost/:id" component={EditPost}/>
            </Route>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="dashboard" component={Dashboard}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
