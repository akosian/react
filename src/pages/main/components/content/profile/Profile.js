import profileContent from "./ProfileContent.module.css";
import ProfileContentContainer from "./ProfileContentContainer";
import React from "react";

let content = profileContent.content;

const Profile = () => {

    return (
        <div className={content}>
            <ProfileContentContainer/>
        </div>
    )
}

export default Profile;