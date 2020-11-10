import store from "./state";

let addPostFunc = () => {
    let state = store.getState();
    let postObject = {
        id: 5,
        avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg',
        text: state.profilePage.newPostText,
        creator: 'Me',
        likes: 0
    }
    state.profilePage.postsValue.push(postObject);
    state.profilePage.newPostText = ''
    store.renderTree()
}

let fillPostFunc = (newPostText) => {
    let state = store.getState();
    state.profilePage.newPostText = newPostText
    store.renderTree()
}

let PostFunctions = {
    addPost: addPostFunc,
    fillPost: fillPostFunc
}

export default PostFunctions;