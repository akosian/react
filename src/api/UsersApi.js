import {axiosInstance} from './Api'

export const getUsers = (currentPage, pageSize) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const followUser = (userId) => {
    return axiosInstance.post(`follow/${userId}`, {})
        .then(response => response.data.resultCode)
}

export const unfollowUser = (userId) => {
    return axiosInstance.delete(`follow/${userId}`)
        .then(response => response.data.resultCode)
}