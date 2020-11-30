import {SET_AUTHORIZATION} from "./authAC";


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

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return setAuthorization(state, action.data, action.isAuthorized)
        default:
            return state
    }
}

export default AuthReducer