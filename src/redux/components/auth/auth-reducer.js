import {LOGOUT, LogoutAC, SET_AUTHORIZATION, SetAuthorizationAC} from "./authAC";
import * as AuthApi from "../../../api/AuthApi";
import {logout} from "../../../api/AuthApi";
import {stopSubmit} from "redux-form";


let setAuthorization = (state, data, isAuthorized) => {
    return {
        ...state,
        data: data,
        isAuthorized: isAuthorized
    }
}

let clearDataAfterLogout = (state) => {
    return {
        ...state,
        data: {},
        isAuthorized: false
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

export const LoginThunkCreator = (email, password) => {
    return (dispatch) => {
        AuthApi.login(email, password).then(result => {
            let isSuccess = result.data.resultCode === 0
            if (isSuccess) {
                dispatch(SetAuthorizationThunkCreator())
            } else {
                let message = result.data.messages.length > 0 ? result.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const LogoutThunkCreator = () => {
    return (dispatch) => {
        AuthApi.logout().then(result => {
            let isSuccess = result.data.resultCode === 0
            if (isSuccess) {
                dispatch(LogoutAC())
            } else {
                let action = stopSubmit('login', {_error: "Email or Password wrong!"})
                dispatch(action)
            }
        })
    }
}

export const SetAuthorizationThunkCreator = () => {
    return (dispatch) => {
        return AuthApi.getIsAuth().then(response => {
            let isAuthorized = response.data.resultCode === 0
            if (isAuthorized) {
                let {id, login, email} = response.data.data
                dispatch(SetAuthorizationAC(id, login, email, isAuthorized))
            }
        })
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return setAuthorization(state, action.data, action.isAuthorized)
        case LOGOUT:
            return clearDataAfterLogout(state, action.email, action.password)
        case LogoutAC:
            return logout(state)
        default:
            return state
    }
}

export default AuthReducer