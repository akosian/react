export const FOLLOW = 'users/FOLLOW'
export const UNFOLLOW = 'users/UNFOLLOW'
export const SET_USERS = 'users/SET-USERS'
export const CHANGE_PAGE = 'users/CHANGE_PAGE'
export const TOTAL_COUNT = 'users/TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

export const FollowAC = (id) => ({
    type: FOLLOW,
    id: id
})

export const UnFollowAC = (id) => ({
    type: UNFOLLOW,
    id: id
})

export const SetUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})

export const SetTotalCountAC = (totalCount) => ({
    type: TOTAL_COUNT,
    totalCount: totalCount
})

export const SetCurrentPageAC = (currentPage) => ({
    type: CHANGE_PAGE,
    page: currentPage
})

export const ToggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export const ToggleIsFollowingProgressAC = (isInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isInProgress: isInProgress,
    userId: userId
})