import {
    AddPost,
    SetUserInfoAC,
    ToggleIsFetchingAC,
} from "../../../../../redux/components/profilepage/posts/PostsActionCreator";
import {connect} from "react-redux";
import React from 'react'
import ProfileContent from "./ProfileContent";
import {withRouter} from "react-router";
import {
    getProfileStatusThunkCreator,
    getUserInfoThunkCreator, updateProfileStatusThunkCreator
} from "../../../../../redux/components/profilepage/ProfileReducer";
import {withAuthRedirect} from "../../../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentUserIdSelector} from "../../../../../redux/components/auth/authSelectors";

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId === undefined
            ? this.props.currentUserId
            : this.props.match.params.userId
        this.props.getProfileInfo(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getProfileInfo(this.props.match.params.userId)
            this.props.getProfileStatus(this.props.match.params.userId)
        }
    }

    render() {
        return <ProfileContent userInfo={this.props.userInfo} status={this.props.status}
                               onAddPost={this.props.onAddPost} postsValue={this.props.postsValue}
                               updateStatus={this.props.updateProfileStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        postsValue: state.profilePage.postsValue,
        userId: state.profilePage.userId,
        currentUserId: getCurrentUserIdSelector(state),
        status: state.profilePage.status
    }
}

let mapDispatchToProps = {
    onAddPost: AddPost,
    toggleIsFetching: ToggleIsFetchingAC,
    setProfileInfo: SetUserInfoAC,
    getProfileInfo: getUserInfoThunkCreator,
    getProfileStatus: getProfileStatusThunkCreator,
    updateProfileStatus: updateProfileStatusThunkCreator
}

export const ProfileContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileComponent)
