import UserContentCss from "./UsersContent.module.css";
import React from "react";
import UserItemComponent from "./user/UserItemContainer";

const UsersContent = (props) => {
    return (
        <div className={UserContentCss.item}>
            {props.users.map(user => <UserItemComponent follow={props.follow}
                                                        unfollow={props.unfollow}
                                                        user={user}
                                                        toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                                                        isFollowingProgress={props.isFollowingProgress}/>)}
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