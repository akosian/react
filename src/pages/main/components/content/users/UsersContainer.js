import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalCountAC,
    SetUsersAC,
    ToggleIsFetchingAC,
    UnFollowAC
} from "../../../../../redux/components/userspage/UsersActionCreator";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.setUsers()
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p)
        this.setUsers(p)
    }

    setUsers = (currentPage = this.props.currentPage) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
                headers: {
                    'API-KEY': '09a39206-22cc-4776-a7f9-0fe50b1debbf'
                }
            }
        ).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.followUser} unfollow={this.props.unfollowUser}/>
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        showUsers: state.usersPage.showUsers,
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = {
    followUser: FollowAC,
    unfollowUser: UnFollowAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalCount: SetTotalCountAC,
    toggleIsFetching: ToggleIsFetchingAC
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;