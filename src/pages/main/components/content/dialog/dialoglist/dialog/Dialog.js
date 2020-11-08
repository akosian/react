import DialogsCss from "./Dialog.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={DialogsCss.item}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={DialogsCss.active}>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default Dialog;