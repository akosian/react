import ProfileInfoCss from './ProfileInfo.module.css'
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;