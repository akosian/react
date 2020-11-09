import State from "./state";
import {rerenderTree} from "../render";

let addPostMethod = (newPostValue) => {
    let postObject = {
        id: 5,
        avatar: '',
        text: newPostValue,
        creator: 'Me',
        likes: 0
    }
    State.profilePage.postsValue.push(postObject);
    rerenderTree(State)
}

let PostMethods = {
    addPost: addPostMethod
}

export default PostMethods;