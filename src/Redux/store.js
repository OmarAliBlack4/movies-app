import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducer/moviesReducere";
import {createStore , applyMiddleware} from 'redux'
import thunk from "redux-thunk";







export const store = createStore(moviesReducer ,applyMiddleware(thunk));