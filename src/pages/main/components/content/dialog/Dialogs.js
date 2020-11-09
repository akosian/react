import DialogCss from './Dialogs.module.css';
import DialogList from "./dialoglist/DialogList";
import Thread from "./thread/Thread";
import React from "react";

const Dialogs = (props) => {
    let messages = props.state.messages
    let dialogsData = props.state.dialogs

    return (
        <div className={DialogCss.dialog_content}>
            <DialogList dialogsData={dialogsData}/>
            <Thread messages={messages} image='https://avatarfiles.alphacoders.com/527/52773.jpg'/>
        </div>
    )
}

export default Dialogs;