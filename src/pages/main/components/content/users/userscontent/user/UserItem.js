import React from "react";
import ItemCss from './UserItem.module.css'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    let followClick = () => {
        let followAction = props.user.followed ? props.unfollow : props.follow
        followAction()
        debugger
    }

    return (
        <div className={ItemCss.content}>
            <div className={ItemCss.item}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img
                        src={props.user.photos.small != null ? props.user.photos.small : 'https://i.pinimg.com/236x/5f/6f/2a/5f6f2a6ea2f3682dc08ed886e44610cc.jpg'}/>
                </NavLink>
                <span>{props.user.name}</span>
                <div>
                    <button
                        onClick={followClick}
                        disabled={props.isFollowingProgress.some(id => id === props.user.id)}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
                    <span>   </span>
                    <span>{props.user.status}</span>
                </div>
            </div>
        </div>
    )
}

export default UserItem;