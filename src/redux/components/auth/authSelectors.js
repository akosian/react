export const getUserDataSelector = (state) => {
    return state.auth.data
}

export const getCurrentUserIdSelector = (state) => {
    return state.auth.data.id
}