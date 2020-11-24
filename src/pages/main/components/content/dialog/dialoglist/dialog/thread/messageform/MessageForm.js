import React from "react";

const MessageForm = (props) => {
    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.onAddMsg()
    }

    let onChangeNewMsgText = () => {
        let newText = newMessage.current.value;
        props.onNewMsgTextChange(newText)
    }

    return (
        <div>
            <textarea onChange={onChangeNewMsgText} ref={newMessage} value={props.newMessageText}/>
            <button onClick={onAddMessage}>Send</button>
        </div>
    )
}

export default MessageForm;