import React from "react";
import {AddMessageCreator, UpdateNewMessageTextCreator} from '../../../../../../../../../redux/components/dialogs/messages/MessageActionCreator'

const MessageForm = (props) => {
    let dispatch = props.dispatch;

    let newMessage = React.createRef();

    let addMessage = () => {
        dispatch(AddMessageCreator())
    }

    let updateNewMessageText = () => {
        dispatch(UpdateNewMessageTextCreator(newMessage.current.value))
    }

    return (
        <div>
            <textarea onChange={updateNewMessageText} ref={newMessage} value={props.newMessageText}/>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default MessageForm;