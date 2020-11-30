import {axiosInstance} from './Api'

export const getIsAuth = () => {
    return axiosInstance.get(`auth/me`, {withCredentials: true})
}