import {combineReducers, createStore} from "redux";
import dialogsReducer from "./components/dialogs/DialogsReducer";
import profileReducer from "./components/profilepage/ProfileReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

const Store = createStore(reducers);

export default Store;