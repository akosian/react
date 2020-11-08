import ProfileInfoCss from './ProfileInfo.module.css'
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src={props.background}/>
            <div className={ProfileInfoCss.info}>
                <img src={props.avatar}/>
                <br></br>
                <span>{props.name} {props.age}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;