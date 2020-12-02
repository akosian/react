import {axiosInstance} from './Api'

export const getIsAuth = () => {
    return axiosInstance.get(`auth/me`)
}

export const login = (email, password) => {
    return axiosInstance.post('auth/login', {email: email, password: password})
}

export const logout = () => {
    return axiosInstance.delete('auth/login')
}