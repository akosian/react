import DialogListCss from './DialogList.module.css'
import Dialog from "./dialog/Dialog";
import React from "react";
import {Route} from "react-router-dom";
import Thread from "./dialog/thread/Thread";

const DialogList = (props) => {
    let dialogsData = props.state.dialogs
    let dialogs = dialogsData.map(data => <Dialog state={props.state} name={data.name} id={data.id}
                                                  dispatch={props.dispatch}/>)

    let routes = props.state.messages.map(message => (
        <Route path={`/dialogs/${message.id}`}
               render={() => <Thread messages={message.messages} dispatch={props.dispatch}
                                     newMessageText={props.state.newMessageText}
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