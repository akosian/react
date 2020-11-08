import DialogListCss from './DialogList.module.css'
import Dialog from "./dialog/Dialog";
import React from "react";

const DialogList = (props) => {
    return (
        <div className={DialogListCss.dialog_list}>
            <Dialog name={props.dialogsData[0].name} id={props.dialogsData[0].id}/>
            <Dialog name={props.dialogsData[1].name} id={props.dialogsData[1].id}/>
        </div>
    )
}

export default DialogList;