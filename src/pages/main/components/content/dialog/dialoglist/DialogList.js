import DialogListCss from './DialogList.module.css'
import Dialog from "./dialog/Dialog";
import React from "react";

const DialogList = (props) => {
    let dialogs = props.dialogsData.map(data => <Dialog name={data.name} id={data.id}/>)

    return (
        <div className={DialogListCss.dialog_list}>
            {dialogs}
        </div>
    )
}

export default DialogList;