import postCss from './Post.module.css'
import React from "react";

const Post = (props) => {
    let postObject = props.postObject;

    return (
        <div className={postCss.item}>
            <div className={postCss.item}>
                <span>{postObject.text}</span>
            </div>
            <div>
                <img src={postObject.avatar}/>
                <span>{postObject.creator} </span>
                <span>Likes:{postObject.likes}</span>
            </div>
        </div>
    )
}

export default Post;