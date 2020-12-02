export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = "UPDATE-TEXT";
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const SET_USER_INFO = 'SET-USER-INFO'

export const AddPost = (newPostText) => ({
    type: ADD_POST,
    newPostText: newPostText
})

export const UpdateNewPostText = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
})


export const ToggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export const SetUserInfoAC = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo: userInfo
})