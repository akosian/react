import DialogsCss from "./DialogItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={DialogsCss.item}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={DialogsCss.active}>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogItem;