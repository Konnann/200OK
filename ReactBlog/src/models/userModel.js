import * as requester from './requesterModel';
import observer from './observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    let avatarImage = userInfo.avatarImage;
    sessionStorage.setItem('avatar', avatarImage);
    let coverImage = userInfo.coverImage;
    sessionStorage.setItem('cover', coverImage);

    observer.onSessionUpdate();
}


function updateSettings(settings) {
    let data = {};
    for (let entry in settings) {
        if (entry !== '' || entry !== 'undefined') {
            data[entry] = settings[entry];
        }
    }

    let userId = sessionStorage.getItem("userId");

    requester.update('user', userId, data, 'kinvey')
        .then(function (userInfo) {
            saveSession(userInfo)
        })
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

// user/register
function register(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}
export {login, register, logout, updateSettings};