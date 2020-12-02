import ProfileInfoCss from './ProfileInfo.module.css'
import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src={props.user.background}/>
            <div className={ProfileInfoCss.info}>
                <img src={props.user.photos.small}/>
                <br></br>
                <span>{props.user.fullName} {props.user.aboutMe}</span>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;