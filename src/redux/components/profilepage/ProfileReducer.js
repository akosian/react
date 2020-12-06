import {ADD_POST, SET_USER_INFO, SetUserInfoAC, TOGGLE_IS_FETCHING} from "./posts/PostsActionCreator";
import * as ProfileApi from "../../../api/ProfileApi";
import {
    GET_PROFILE_STATUS,
    GetProfileStatusAC,
    UPDATE_PROFILE_STATUS,
    UpdateProfileStatusAC
} from "./ProfileActionCreator";

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

let addPostFunc = (state, newPostText) => {
    let postObject = {
        id: 5,
        avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg',
        text: newPostText,
        creator: 'Me',
        likes: 0
    }
    return {
        ...state,
        postsValue: [...state.postsValue, postObject],
    };
}

let setProfileInfo = (state, userInfo) => {
    return {
        ...state,
        userInfo: userInfo,
        userId: userInfo.userId
    }
}

let setProfileStatus = (state, status) => {
    return {
        ...state,
        status: status
    }
}

let toggleIsFetching = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching
    }
}

let initialState = {
    postsValue: postsValueData,
    userInfo: null,
    status: '',
    isFetching: false,
    currentUserId: 12910,
    userId: 10
}

export const getUserInfoThunkCreator = (userId) => async (dispatch) => {
    let result = await ProfileApi.getProfileInfo(userId)
    dispatch(SetUserInfoAC(result))
}


export const getProfileStatusThunkCreator = (userId) => async (dispatch) => {
    let result = await ProfileApi.getProfileStatus(userId)
    dispatch(GetProfileStatusAC(result))
}

export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    let result = await ProfileApi.setProfileStatus(status)
    if (result === 0) {
        dispatch(UpdateProfileStatusAC(status))
    }
}

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPostFunc(state, action.newPostText)
        case TOGGLE_IS_FETCHING:
            return toggleIsFetching(state, action.isFetching)
        case SET_USER_INFO:
            return setProfileInfo(state, action.userInfo)
        case GET_PROFILE_STATUS:
            return setProfileStatus(state, action.status)
        case UPDATE_PROFILE_STATUS:
            return setProfileStatus(state, action.status)
        default:
            return state;
    }
}

export default ProfileReducer;