import {
    CHANGE_PAGE,
    FOLLOW,
    FollowAC,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    ToggleIsFetchingAC,
    ToggleIsFollowingProgressAC,
    TOTAL_COUNT,
    UNFOLLOW, UnFollowAC
} from "./UsersActionCreator.js";
import {SetTotalCountAC, SetUsersAC} from "./UsersActionCreator";
import * as UsersApi from "../../../api/UsersApi";

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

let setUsers = (state, users) => {
    return {
        ...state,
        users: [...users]
    }
}

let toggleIsFetchingAC = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching
    }
}

let toggleIsFollowingProgress = (state, isFollowingProgress, userId) => {
    return {
        ...state,
        isFollowingProgress: isFollowingProgress
            ? [...state.isFollowingProgress, userId]
            : [...state.isFollowingProgress.filter(id => id !== userId)]
    }
}

let setCurrentPage = (state, page) => {
    return {
        ...state,
        currentPage: page
    }
}

let setTotalCount = (state, totalCount) => {
    return {
        ...state,
        totalCount: totalCount
    }
}

let followUser = (state, id) => {
    return {
        ...state,
        users: state.users.map(user => {
            if (user.id === id) {
                return {...user, followed: true}
            }
            return user;
        })
    }
}

let unfollowUser = (state, id) => {
    return {
        ...state,
        users: state.users.map(user => {
            if (user.id === id) {
                return {...user, followed: false}
            }
            return user;
        })
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(ToggleIsFetchingAC(true))

        UsersApi.getUsers(currentPage, pageSize).then(response => {

            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(response.data.items))
            dispatch(SetTotalCountAC(response.data.totalCount))
        })
    }
}

export const followUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(ToggleIsFollowingProgressAC(true, userId))
        UsersApi.followUser(userId)
            .then(result => {
                if (result === 0) {
                    dispatch(FollowAC(userId))
                }
            })
        dispatch(ToggleIsFollowingProgressAC(false, userId))
    }
}

export const unfollowUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(ToggleIsFollowingProgressAC(true, userId))
        UsersApi.unfollowUser(userId).then(result => {
            if (result === 0) {
                dispatch(UnFollowAC(userId))
            }
        })
        dispatch(ToggleIsFollowingProgressAC(false, userId))
    }
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return followUser(state, action.id)
        case UNFOLLOW:
            return unfollowUser(state, action.id)
        case SET_USERS:
            return setUsers(state, action.users)
        case CHANGE_PAGE:
            return setCurrentPage(state, action.page)
        case TOTAL_COUNT:
            return setTotalCount(state, action.totalCount)
        case TOGGLE_IS_FETCHING:
            return toggleIsFetchingAC(state, action.isFetching)
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return toggleIsFollowingProgress(state, action.isInProgress, action.userId)
        default:
            return state
    }
}

export default UsersReducer;