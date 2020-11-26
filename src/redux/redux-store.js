import {combineReducers, createStore} from "redux";
import dialogsReducer from "./components/dialogs/DialogsReducer";
import profileReducer from "./components/profilepage/ProfileReducer";
import newsReducer from "./components/news/NewsReducer";
import usersReducer from './components/userspage/UsersReducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    newsPage: newsReducer
})

const Store = createStore(reducers);

export default Store;