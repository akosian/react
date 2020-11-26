import UsersCss from './Users.module.css'
import React from "react";
import UsersContentContainer from "./UsersContentContainer";

const Users = () => {
    return (
        <div className={UsersCss.content}>
            <UsersContentContainer/>
        </div>
    )
}

export default Users;