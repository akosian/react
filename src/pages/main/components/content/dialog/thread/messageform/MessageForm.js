import React from "react";

const MessageForm = () => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        let newMessageText = newMessage.current.value;
        newMessage.current.value = '';
    }

    return (
        <div>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageForm;