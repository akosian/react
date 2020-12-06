export const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

export const AddMessageCreator = (id, newMsgText) => ({
    type: ADD_MESSAGE,
    id: id,
    newMsgText: newMsgText
})