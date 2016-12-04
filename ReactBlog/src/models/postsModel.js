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
export {create};
