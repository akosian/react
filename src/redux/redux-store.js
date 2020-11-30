import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./components/dialogs/DialogsReducer";
import profileReducer from "./components/profilepage/ProfileReducer";
import newsReducer from "./components/news/NewsReducer";
import usersReducer from './components/userspage/UsersReducer';
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer
})

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;