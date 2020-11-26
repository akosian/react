import {
    ChangePage,
    FollowAC,
    HideUsersAC,
    SetUsers,
    ShowAllUsersAC,
    UnFollowAC
} from "../../../../../redux/components/userspage/UsersActionCreator";
import {connect} from "react-redux";
import Users from "./UsersContent";


let mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => {
            dispatch(ShowAllUsersAC())
        },
        hideAll: () => {
            dispatch(HideUsersAC())
        },
        followUser: (id) => {
            dispatch(FollowAC(id))
        },
        unfollowUser: (id) => {
            dispatch(UnFollowAC(id))
        },
        setUsers: (users) => {
            dispatch(SetUsers(users))
        },
        changePage: (pageNumber) => {
            dispatch(ChangePage(pageNumber))
        }
    }
}

let mapStateToProps = (state) => {
    return {
        showUsers: state.usersPage.showUsers,
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count
    }
}

const UsersContentContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContentContainer;