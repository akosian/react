import {ADD_MESSAGE} from "./messages/MessageActionCreator";

let dialogsData = [
    {id: 1, name: 'Alena'},
    {id: 2, name: 'Alex'}]

let threads = [
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

const AddMessage = (state, id, newMsgText) => {
    let newMessage = {
        id: 2,
        text: newMsgText,
        image: 'https://avatarfiles.alphacoders.com/527/52773.jpg'
    }
    return {
        ...state,
        messages: state.threads.map(thread => {
            if (thread.id === id) {
                let updMessage = {...thread}
                updMessage.messages.push(newMessage)
                return updMessage
            }
            return thread
        }),
    };
}

let initialState = {
    dialogs: dialogsData,
    threads: threads,
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return AddMessage(state, action.id, action.newMsgText)
        default:
            return state;
    }
}

export default DialogsReducer;