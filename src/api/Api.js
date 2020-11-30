import * as axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '09a39206-22cc-4776-a7f9-0fe50b1debbf'},
})