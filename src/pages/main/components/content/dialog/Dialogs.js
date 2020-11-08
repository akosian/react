import DialogCss from './Dialogs.module.css';
import DialogList from "./dialoglist/DialogList";
import Thread from "./thread/Thread";
import React from "react";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Alena'},
        {id: 2, name: 'Alex'}]

    let messages = [
        {id:1,image:'https://avatarfiles.alphacoders.com/527/52773.jpg',text:'Hi'},
        {id:2,image:'https://avatarfiles.alphacoders.com/527/52773.jpg',text:'How are you?'}]

    return (
        <div className={DialogCss.dialog_content}>
            <DialogList dialogsData={dialogsData}/>
            <Thread messages={messages} image='https://avatarfiles.alphacoders.com/527/52773.jpg'/>
        </div>
    )
}

export default Dialogs;