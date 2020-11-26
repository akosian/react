import profileContent from './ProfileContent.module.css'
import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPosts from "./myposts/MyPosts";

let content = profileContent.content;

const ProfileContent = (props) => {
    let userInfo = props.userInfo;
    let onNewPostChange = props.onPostChange;
    let onAddPost = props.onAddPost;

    return (
        <div className={content}>
            <ProfileInfo name={userInfo.name} age={userInfo.age}
                         avatar={userInfo.avatar}
                         background={userInfo.background}/>
            <MyPosts postsValue={props.postsValue} newPostText={props.newPostText} onAddPost={onAddPost}
                     onNewPostChange={onNewPostChange}/>
        </div>
    )
}

export default ProfileContent;