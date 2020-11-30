import UserContentCss from "./UsersContent.module.css";
import UserItem from "./user/UserItem";
import React from "react";

const UsersContent = (props) => {
    return (
        <div className={UserContentCss.item}>
            {props.users.map(user => <UserItem follow={props.follow}
                                                    unfollow={props.unfollow}
                                                    user={user}/>)}
            <br></br>
            <div>
                <button>Show All</button>
                <span>                            </span>
                <button>Hide users</button>
            </div>
        </div>
    )
}

export default UsersContent;