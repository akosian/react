import {ADD_MESSAGE, UPDATE_NEW_MSG_TEXT} from "./messages/MessageActionCreator";

let dialogsData = [
    {id: 1, name: 'Alena'},
    {id: 2, name: 'Alex'}]

let messagesData = [
    {
        id: 1,
        messages: [
            {image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'Hi'},
            {image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'How are you?'}
        ]
    },
    {
        id: 2,
        messages: [
            {image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'Hi'},
            {image: 'https://avatarfiles.alphacoders.com/527/52773.jpg', text: 'Hi'}
        ]
    },
]

const UpdateNewMessageText = (state, newMessageText) => {
    let newState = {...state}
    newState.newMessageText = newMessageText
    return newState;
}

const AddMessage = (state) => {
    let newMessage = {
        id: 2,
        text: state.newMessageText,
        image: 'https://avatarfiles.alphacoders.com/527/52773.jpg'
    }
    let newState = {...state}
    newState.messages = [...state.messages]
    newState.messages[0].messages.push(newMessage)
    newState.newMessageText = ''
    return newState;
}

let initialState = {
    dialogs: dialogsData,
    messages: messagesData,
    newMessageText: ''
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return AddMessage(state)
        case UPDATE_NEW_MSG_TEXT:
            return UpdateNewMessageText(state, action.newMessageText)
        default:
            return state;
    }
}

export default DialogsReducer;