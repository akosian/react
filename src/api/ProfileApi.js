import {axiosInstance} from './Api'


export const getProfileInfo = (userId) => {
    return axiosInstance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const getProfileStatus = (userId) => {
    return axiosInstance.get(`profile/status/${userId}`)
        .then(response => response.data)
}

export const setProfileStatus = (status) => {
    return axiosInstance.put('profile/status', {status: status})
        .then(response => response.data.resultCode)
}