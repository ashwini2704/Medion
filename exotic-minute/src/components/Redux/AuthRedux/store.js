import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    isError : false,
    isLoading : false,
    isAuth : false
}

export const store = legacy_createStore(reducer,initialState)