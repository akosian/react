import {CHANGE_PAGE, FOLLOW, HIDE_ALL, SET_USERS, SHOW_ALL, UNFOLLOW} from "./UsersActionCreator";

const showUsers = [
    // users[0],
    // users[1]
]

let initialState = {
    users: [],
    showUsers: showUsers,
    totalCount: 0,
    page: 1,
    count: 10
}

let setUsers = (state, users) => {
    return {
        ...state,
        users: [...users]
    }
}

let changePage = (state, page) => {
    return {
        ...state,
        page: page
    }
}

let showAll = (state) => {
    return {
        ...state,
        showUsers: [...state.users]
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

let hideAll = (state) => {
    return {
        ...state,
        // showUsers: [users[0], users[1]]
    }
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return showAll(state)
        case HIDE_ALL:
            return hideAll(state)
        case FOLLOW:
            return followUser(state, action.id)
        case UNFOLLOW:
            return unfollowUser(state, action.id)
        case SET_USERS:
            return setUsers(state, action.users)
        case CHANGE_PAGE:
            return changePage(state, action.page)
        default:
            return state
    }
}

export default UsersReducer;