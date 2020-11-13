import profileContent from './ProfileContent.module.css'
import React from "react";
import MyPosts from './myposts/MyPosts'
import ProfileInfo from "./profileinfo/ProfileInfo";

let content = profileContent.content;

const ProfileContent = (props) => {
    let userInfo = props.state.userInfo;
    let postsValue = props.state.postsValue;
    let dispatch = props.dispatch;

    return (
        <div className={content}>
            <ProfileInfo name={userInfo.name} age={userInfo.age}
                         avatar={userInfo.avatar}
                         background={userInfo.background}/>
            <MyPosts postsValue={postsValue} dispatch={dispatch} newPostText={props.state.newPostText}/>
        </div>
    )
}

export default ProfileContent;