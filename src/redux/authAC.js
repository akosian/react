export const SET_AUTHORIZATION = 'SET-AUTHORIZATION'

export const SetAuthorizationAC = (id, login, email, isAuthorized) => ({
    type: SET_AUTHORIZATION,
    data: {
        id: id,
        login: login,
        email: email
    },
    isAuthorized: isAuthorized
})