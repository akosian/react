import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/main/Main";
import store from "./redux/redux-store";

export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Main state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderTree();

store.subscribe(rerenderTree)

reportWebVitals();