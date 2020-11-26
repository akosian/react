import UserContentCss from "./UsersContent2.module.css";
import UserItem from "./UserItem";
import React from "react";

const UserContent = (props) => {
    return (
        <div className={UserContentCss.item}>
            {props.users.map(user => <UserItem follow={props.followUser}
                                                    unfollow={props.unfollowUser}
                                                    user={user}/>)}
            <br></br>
            <div>
                <button onClick={props.showAll}>Show All</button>
                <span>                            </span>
                <button onClick={props.hideAll}>Hide users</button>
            </div>
        </div>
    )
}

export default UserContent;