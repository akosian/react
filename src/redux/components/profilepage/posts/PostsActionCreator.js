export const ADD_POST = 'profile/post/ADD-POST';
export const UPDATE_NEW_POST_TEXT = "profile/post/UPDATE-TEXT";
export const TOGGLE_IS_FETCHING = 'profile/post/TOGGLE-IS-FETCHING'
export const SET_USER_INFO = 'profile/post/SET-USER-INFO'

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