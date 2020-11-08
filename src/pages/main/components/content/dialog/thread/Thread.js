import ThreadCss from './Thread.module.css';
import React from "react";

const Thread = (props) => {
    return (
        <div className={ThreadCss.thread}>
            <div>
                <img src={props.messages[0].image}/>
                <span>{props.messages[0].text}</span>
            </div>
            <div>
                <img src={props.messages[1].image}/>
                <span>{props.messages[1].text}</span>
            </div>
        </div>
    )
}

export default Thread;