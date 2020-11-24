export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = "UPDATE-TEXT";

export const AddPost = () => ({
    type: ADD_POST,
})

export const UpdateNewPostText = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
})