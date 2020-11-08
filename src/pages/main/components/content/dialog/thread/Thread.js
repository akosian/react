import ThreadCss from './Thread.module.css';
import React from "react";
import Message from "./message/Message";

const Thread = (props) => {
    let messages = props.messages.map(data => <Message message={data}/>);

    return (
        <div className={ThreadCss.thread}>
            {messages}
        </div>
    )
}

export default Thread;