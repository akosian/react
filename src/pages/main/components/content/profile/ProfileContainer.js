import {
    AddPost,
    SetUserInfo,
    ToggleIsFetchingAC,
    UpdateNewPostText
} from "../../../../../redux/components/profilepage/posts/PostsActionCreator";
import {connect} from "react-redux";
import React from 'react'
import * as axios from "axios";
import ProfileContent from "./ProfileContent";
import { withRouter } from "react-router";

class ProfileComponent extends React.Component {

    componentDidMount() {
        this.setUserInfo()
    }

    setUserInfo() {
        let userId = !this.props.match.params.userId
            ? this.props.currentUserId
            : this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
                headers: {
                    'API-KEY': '09a39206-22cc-4776-a7f9-0fe50b1debbf'
                }
            }
        ).then(response => {
            this.props.setProfileInfo(response.data)
        })
    }

    render() {
        return (
            <ProfileContent userInfo={this.props.userInfo} onPostChange={this.props.onPostChange}
                            onAddPost={this.props.onAddPost} postsValue={this.props.postsValue}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        postsValue: state.profilePage.postsValue,
        newPostText: state.profilePage.newPostText,
        userId: state.profilePage.userId,
        currentUserId: state.profilePage.currentUserId
    }
}

let mapDispatchToProps = {
    onAddPost: AddPost,
    onPostChange: UpdateNewPostText,
    toggleIsFetching: ToggleIsFetchingAC,
    setProfileInfo: SetUserInfo
}

let withUrlDataContainerComponent = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);