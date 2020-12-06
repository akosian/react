import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = (users) => {
    return users.filter(u => true)
}

export const getUserSuperSelector = createSelector(getUsers, getUsersSelector)