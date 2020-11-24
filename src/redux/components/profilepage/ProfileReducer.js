import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./posts/PostsActionCreator";

let postsValueData = [
    {
        id: 1,
        text: 'My first post',
        likes: 10,
        creator: 'Anton',
        avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg'
    },
    {
        id: 2,
        text: 'Shit happens',
        likes: 0,
        creator: 'Alex',
        avatar: 'https://avatarfiles.alphacoders.com/527/52773.jpg'
    }
]

let userInfoData = {
    name: 'Anton',
    age: 23,
    avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg',
    background: 'https://c.wallhere.com/photos/0a/93/reactJS_JavaScript_Typescript_programming_programming_language_React_Native_Facebook_React-1568827.jpg!d'
}

let addPostFunc = (state) => {
    let postObject = {
        id: 5,
        avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg',
        text: state.newPostText,
        creator: 'Me',
        likes: 0
    }
    let stateCopy = {...state}
    stateCopy.postsValue = [...state.postsValue]
    stateCopy.postsValue.push(postObject);
    stateCopy.newPostText = ''
    return stateCopy;
}

let fillPostFunc = (state, newPostText) => {
    state.newPostText = newPostText
    return state;
}

let initialState = {
    postsValue: postsValueData,
    userInfo: userInfoData,
    newPostText: ''
}

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPostFunc(state)
        case UPDATE_NEW_POST_TEXT:
            return fillPostFunc(state, action.newPostText)
        default:
            return state;
    }
}

export default ProfileReducer;