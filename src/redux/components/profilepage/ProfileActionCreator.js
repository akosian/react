export const GET_PROFILE_STATUS = 'profile/GET-PROFILE-STATUS'
export const UPDATE_PROFILE_STATUS = 'profile/SET-PROFILE-STATUS'

export const GetProfileStatusAC = (status) => ({
    type: GET_PROFILE_STATUS,
    status: status
})

export const UpdateProfileStatusAC = (status) => ({
    type: UPDATE_PROFILE_STATUS,
    status: status
})