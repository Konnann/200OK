import * as requester from './requesterModel';
import observer from './observer';


function create(title, content, callback) {
    let newPost = {
        title: title,
        content: content,
        authorId: sessionStorage.getItem('userId')
    };

    requester.post('appdata', 'posts', newPost, 'kinvey')
        .then(callback(true));

}
function loadMyPosts(callback) {
    
    let query= `?query={"authorID":"${sessionStorage.getItem('userId')}"}`;
    
    requester.get('appdata', 'posts/' + query, 'kinvey')
        .then(callback);
}
export {create,
        loadMyPosts};
