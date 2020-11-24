export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const AddMessageCreator = () => ({
    type: ADD_MESSAGE,
})

export const UpdateNewMessageTextCreator = (newMessageText) => ({
    type: UPDATE_NEW_MSG_TEXT,
    newMessageText: newMessageText
})