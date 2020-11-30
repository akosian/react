import {SET_AUTHORIZATION, SetAuthorizationAC} from "./authAC";
import * as AuthApi from "../api/AuthApi";


let setAuthorization = (state, data, isAuthorized) => {
    return {
        ...state,
        data: data,
        isAuthorized: isAuthorized
    }
}

const initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuthorized: false
}

export const SetAuthorizationThunkCreator = () => {
    return (dispatch) => {
        AuthApi.getIsAuth().then(response => {
            let isAuthorized = response.data.resultCode === 0
            let {id, login, email} = response.data.data
            dispatch(SetAuthorizationAC(id, login, email, isAuthorized))
        })
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return setAuthorization(state, action.data, action.isAuthorized)
        default:
            return state
    }
}

export default AuthReducer