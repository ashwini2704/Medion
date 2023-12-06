import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";



export const reducer = (state, { type, payload }) => {
    switch(type) {
        case LOGIN_REQUEST : {
            return {...state, isLoading : true}
        }
        case LOGIN_FAILURE: {
            return {
                ...state, 
                isLoading : false, 
                isError : true
            }
        }
        case LOGIN_SUCCESS : {
            return {
                ...state, 
                isLoading : false, 
                isError : false, 
                isAuth : true
            }
        }
        default : return state
    }
}