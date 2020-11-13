import React from "react";


const Message = (props) => {
    return (
        <div>
            <img src={props.message.image}/>
            <span>{props.message.text}</span>
        </div>
    )
}

export default Message;