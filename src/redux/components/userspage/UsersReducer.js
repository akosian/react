import {
    CHANGE_PAGE,
    FOLLOW,
    HIDE_ALL,
    SET_USERS,
    SHOW_ALL,
    TOGGLE_IS_FETCHING,
    TOTAL_COUNT,
    UNFOLLOW
} from "./UsersActionCreator";

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}

let setUsers = (state, users) => {
    return {
        ...state,
        users: [...users]
    }
}

let toggleIsFetching = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching
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
            return toggleIsFetching(state, action.isFetching)
        default:
            return state
    }
}

export default UsersReducer;