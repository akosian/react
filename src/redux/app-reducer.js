import {SET_INITIALIZED, SetInitializedAC} from "./appActionCreator";
import {SetAuthorizationThunkCreator} from "./components/auth/auth-reducer";

let setInitialized = (state) => {
    return {
        ...state,
        initialized: true
    }
}

const initialState = {
    initialized: false
}

export const initializeApp = () => async (dispatch) => {
    await dispatch(SetAuthorizationThunkCreator())
    dispatch(SetInitializedAC())
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return setInitialized(state)
        default:
            return state
    }
}

export default appReducer