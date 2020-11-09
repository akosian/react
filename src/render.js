import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/main/Main";
import PostMethods from "./redux/PostsMethods";

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Main state={state} postMethods={PostMethods}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}