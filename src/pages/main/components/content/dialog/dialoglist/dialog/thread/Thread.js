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
                <MessageForm dispatch={props.dispatch} newMessageText={props.newMessageText}/>
            </div>
        </div>
    )
}

export default Thread;