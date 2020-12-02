import {
    SetCurrentPageAC,
    SetTotalCountAC,
    ToggleIsFetchingAC,
    ToggleIsFollowingProgressAC
} from "../../../../../redux/components/userspage/UsersActionCreator";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    unfollowUserThunkCreator
} from "../../../../../redux/components/userspage/UsersReducer";
import {withAuthRedirect} from "../../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p)
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                       users={this.props.users}
                       follow={this.props.followUser} unfollow={this.props.unfollowUser}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       isFollowingProgress={this.props.isFollowingProgress}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        showUsers: state.usersPage.showUsers,
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
    }
}

let mapDispatchToProps = {
    followUser: followUserThunkCreator,
    unfollowUser: unfollowUserThunkCreator,
    setCurrentPage: SetCurrentPageAC,
    setTotalCount: SetTotalCountAC,
    toggleIsFetching: ToggleIsFetchingAC,
    toggleIsFollowingProgress: ToggleIsFollowingProgressAC,
    getUsersThunkCreator: getUsersThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersComponent);