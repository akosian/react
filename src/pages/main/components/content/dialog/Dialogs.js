import DialogList from "./dialoglist/DialogList";
import React from "react";

const Dialogs = (props) => {
    return (
        <div>
            <DialogList state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;