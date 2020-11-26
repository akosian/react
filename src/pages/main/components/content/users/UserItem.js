import React from "react";
import ItemCss from './UserItem.module.css'

const UserItem = (props) => {
    let followClick = () => {
        let userId = props.user.id
        let followAction = props.user.followed ? props.unfollow : props.follow
        followAction(userId)
    }

    return (
        <div className={ItemCss.content}>
            <div className={ItemCss.item}>
                <img src={props.user.photos.small != null ? props.user.photos.small : 'https://i.pinimg.com/236x/5f/6f/2a/5f6f2a6ea2f3682dc08ed886e44610cc.jpg'}/>
                <span>{props.user.name}</span>
                <div>
                    <button
                        onClick={followClick}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
                    <span>   </span>
                    <span>{props.user.status}</span>
                </div>
            </div>
        </div>
    )
}

export default UserItem;