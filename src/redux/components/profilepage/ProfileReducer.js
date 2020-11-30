import {
    ADD_POST,
    SET_USER_INFO,
    SetUserInfoAC,
    TOGGLE_IS_FETCHING,
    UPDATE_NEW_POST_TEXT
} from "./posts/PostsActionCreator";
import * as ProfileApi from "../../../api/ProfileApi";

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

let addPostFunc = (state) => {
    let postObject = {
        id: 5,
        avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg',
        text: state.newPostText,
        creator: 'Me',
        likes: 0
    }
    return {
        ...state,
        postsValue: [...state.postsValue, postObject],
        newPostText: ''
    };
}

let setProfileInfo = (state, userInfo) => {
    return {
        ...state,
        userInfo: userInfo,
        userId: userInfo.userId
    }
}

let toggleIsFetching = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching
    }
}

let fillPostFunc = (state, newPostText) => {
    return {
        ...state,
        newPostText: newPostText
    };
}

let initialState = {
    postsValue: postsValueData,
    userInfo: null,
    newPostText: '',
    isFetching: false,
    currentUserId: 12910,
    userId: 10
}

export const getUserInfoThunkCreator = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfileInfo(userId).then(result => {
            dispatch(SetUserInfoAC(result))
        })
    }
}

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPostFunc(state)
        case UPDATE_NEW_POST_TEXT:
            return fillPostFunc(state, action.newPostText)
        case TOGGLE_IS_FETCHING:
            return toggleIsFetching(state, action.isFetching)
        case SET_USER_INFO:
            return setProfileInfo(state, action.userInfo)
        default:
            return state;
    }
}

export default ProfileReducer;