export const SHOW_ALL = 'SHOW-ALL'
export const HIDE_ALL = 'HIDE-USERS'
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const CHANGE_PAGE = 'CHANGE_PAGE'

export const ShowAllUsersAC = () => ({
    type: SHOW_ALL
})

export const HideUsersAC = () => ({
    type: HIDE_ALL
})

export const FollowAC = (id) => ({
    type: FOLLOW,
    id: id
})

export const UnFollowAC = (id) => ({
    type: UNFOLLOW,
    id: id
})

export const SetUsers = (users) => ({
    type: SET_USERS,
    users: users
})

export const ChangePage = (pageNumber) => ({
    type: CHANGE_PAGE,
    page: pageNumber
})