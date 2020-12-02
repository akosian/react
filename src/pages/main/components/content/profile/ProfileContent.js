import profileContent from './ProfileContent.module.css'
import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPosts from "./myposts/MyPosts";
import Preloader from "../common/Preloader";

let content = profileContent.content;

const ProfileContent = (props) => {
    let userInfo = props.userInfo;
    let onAddPost = props.onAddPost;

    if (!userInfo) {
        return <Preloader/>
    }

    return <div className={content}>
        <ProfileInfo user={userInfo} status={props.status} updateStatus={props.updateStatus}/>
        <br/>
        <MyPosts postsValue={props.postsValue} onAddPost={onAddPost}/>
    </div>
}

export default ProfileContent;