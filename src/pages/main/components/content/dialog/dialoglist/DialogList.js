import DialogListCss from './DialogList.module.css'
import DialogItem from "./dialog/DialogItem";
import React from "react";
import {Route} from "react-router-dom";
import Thread from "./dialog/thread/Thread";

const DialogList = (props) => {
    let dialogs = props.dialogsData.map(data => <DialogItem name={data.name} id={data.id}/>)

    let routes = props.threads.map(message => (
        <Route path={`/dialogs/${message.id}`}
               render={() => <Thread id={message.id} messages={message.messages}
                                     onNewMsgTextChange={props.onNewMsgTextChange}
                                     onAddMsg={props.onAddMsg}
                                     newMessageText={props.newMessageText}
                                     image='https://avatarfiles.alphacoders.com/527/52773.jpg'/>}/>
    ))

    return (
        <div className={DialogListCss.dialog_content}>
            <div>
                {dialogs}
            </div>
            <div>
                {routes}
            </div>
        </div>
    )
}

export default DialogList;