import ThreadCss from './Thread.module.css';
import React from "react";
import Message from "./message/Message";
import MessageForm from "./messageform/MessageForm";

const Thread = (props) => {
    let messages = props.messages.map(data => <Message message={data}/>);

    return (
        <div className={ThreadCss.thread}>
            {messages}
            <br/>
            <div>
                <MessageForm onNewMsgTextChange={props.onNewMsgTextChange}
                             onAddMsg={props.onAddMsg} newMessageText={props.newMessageText}/>
            </div>
        </div>
    )
}

export default Thread;