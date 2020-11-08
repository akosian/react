import profileContent from './ProfileContent.module.css'
import React from "react";
import MyPosts from './myposts/MyPosts'
import ProfileInfo from "./profileinfo/ProfileInfo";

let content = profileContent.content;

const ProfileContent = () => {
    return (
        <div className={content}>
            <ProfileInfo name='Anton' age='23'
                         avatar='https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg'
                         background='https://c.wallhere.com/photos/0a/93/reactJS_JavaScript_Typescript_programming_programming_language_React_Native_Facebook_React-1568827.jpg!d'/>
            <MyPosts/>
        </div>
    )
}

export default ProfileContent;