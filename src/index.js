import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/main/Main";

export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Main store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderTree();

store.setSubscribe(rerenderTree)

reportWebVitals();