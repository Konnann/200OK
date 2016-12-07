import * as requester from './requesterModel';

function create(title, content, callback) {
    let newPost = {
        title: title,
        content: content,
        authorId: sessionStorage.getItem('userId'),
        authorName: sessionStorage.getItem('username')
    };

    requester.post('appdata', 'posts', newPost, 'kinvey')
        .then(callback(true));

}

function getAllPosts(onSuccess) {
    requester.get('appdata', 'posts?sort={"_kmd.ect":-1}', 'kinvey')
        .then(onSuccess)
}

function updatePost(postData, onSuccess) {
    requester.update('appdata', 'posts/' + postData._id, postData, 'kinvey')
        .then(onSuccess)
}

function getPostDetails(id, onSuccess) {
    requester.get('appdata', 'posts/' + id, 'kinvey')
        .then(onSuccess)
}

function loadMyPosts(callback) {
    let query= `?query={"authorId":"${sessionStorage.getItem('userId')}"}&sort={"_kmd.ect":-1}`;

    requester.get('appdata', 'posts' + query, 'kinvey')
        .then(callback);
}

function deletePost(postId, callback) {
    requester.deleteData('appdata', 'posts/' + postId, 'kinvey')
        .then(callback);
}

export {create,
        loadMyPosts,
        getPostDetails,
        updatePost,
        getAllPosts,
        deletePost};
