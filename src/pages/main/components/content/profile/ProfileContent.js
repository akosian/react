import profileContent from './ProfileContent.module.css'
import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPosts from "./myposts/MyPosts";
import Preloader from "../preloader/Preloader";

let content = profileContent.content;

const ProfileContent = (props) => {
    let userInfo = props.userInfo;
    let onNewPostChange = props.onPostChange;
    let onAddPost = props.onAddPost;

    if (!userInfo) {
        return <Preloader/>
    }

    return <div className={content}>
        <ProfileInfo fullName={userInfo.fullName} aboutMe={userInfo.aboutMe}
                     avatar={userInfo.photos.small}
                     background={userInfo.background}/>
        <MyPosts postsValue={props.postsValue} newPostText={props.newPostText} onAddPost={onAddPost}
                 onNewPostChange={onNewPostChange}/>
    </div>
}

export default ProfileContent;