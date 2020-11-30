import {axiosInstance} from './Api'


export const getProfileInfo = (userId) => {
    return axiosInstance.get(`profile/${userId}`, {withCredentials: true})
        .then(response => response.data)
}