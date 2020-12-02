import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./components/dialogs/DialogsReducer";
import profileReducer from "./components/profilepage/ProfileReducer";
import newsReducer from "./components/news/NewsReducer";
import usersReducer from './components/userspage/UsersReducer';
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'
import {reducer} from 'redux-form'

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    form: reducer
})

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;