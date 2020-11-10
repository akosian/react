import PostFunctions from "./PostsMethods";

let dialogsData = [
    {id: 1, name: 'Alena'},
    {id: 2, name: 'Alex'}]

let messagesData = [
    {id: 1, image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'Hi'},
    {id: 2, image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'How are you?'}]

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

let state = {
    profilePage: {
        postsValue: postsValueData,
        userInfo: userInfoData,
        newPostText: ''
    },
    dialogsPage: {
        dialogs: dialogsData,
        messages: messagesData
    },
}

let pagesFunctions = {
    profilePage: {
        PostFunctions: PostFunctions
    }
}

let store = {
    _state: state,
    _subscribe: null,
    _pageFunctions: pagesFunctions,
    getState() {
        return this._state;
    },
    setSubscribe(observer) {
        this._subscribe = observer;
    },
    renderTree() {
        this._subscribe()
    },
    getPagesFunctions() {
        return this._pageFunctions;
    }
}

export default store;