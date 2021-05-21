import { combineReducers, createStore } from "redux";
import { homeReducer } from "./home-reducer";

let reducers = combineReducers({
    home: homeReducer,
})

export let store = createStore(reducers)
