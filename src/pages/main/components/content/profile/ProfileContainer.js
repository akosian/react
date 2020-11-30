import {
    AddPost,
    SetUserInfoAC,
    ToggleIsFetchingAC,
    UpdateNewPostText
} from "../../../../../redux/components/profilepage/posts/PostsActionCreator";
import {connect} from "react-redux";
import React from 'react'
import ProfileContent from "./ProfileContent";
import {withRouter} from "react-router";
import {getUserInfoThunkCreator} from "../../../../../redux/components/profilepage/ProfileReducer";
import {withAuthRedirect} from "../../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = !this.props.match.params.userId
            ? this.props.currentUserId
            : this.props.match.params.userId
        this.props.getProfileInfo(userId)
    }

    render() {
        return <ProfileContent userInfo={this.props.userInfo} onPostChange={this.props.onPostChange}
                               onAddPost={this.props.onAddPost} postsValue={this.props.postsValue}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        postsValue: state.profilePage.postsValue,
        newPostText: state.profilePage.newPostText,
        userId: state.profilePage.userId,
        currentUserId: state.profilePage.currentUserId,
    }
}

let mapDispatchToProps = {
    onAddPost: AddPost,
    onPostChange: UpdateNewPostText,
    toggleIsFetching: ToggleIsFetchingAC,
    setProfileInfo: SetUserInfoAC,
    getProfileInfo: getUserInfoThunkCreator
}

export const ProfileContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileComponent)
