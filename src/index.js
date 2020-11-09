import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderTree} from "./render";
import State from "./redux/state";

rerenderTree(State);

reportWebVitals();