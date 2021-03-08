import { loadData, saveData } from "../../Utils/localStorage";
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"

const token = loadData("token")
const email = loadData("email")
const initState = {

    token : token || '',
    isLoading: false,
    isAuth: token ? true: false,
    error: null,
    email: email||''

}


const AuthReducer = (state=initState, {type, payload }) => {

    switch(type) {
        case AUTH_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case AUTH_SUCCESS: 
            saveData("token", payload.token)
            saveData("email", payload.email)
            return  {
             ...state,
             isLoading: false,
             isAuth: true,
             token : payload.token,
             email: payload.email
        };
        case AUTH_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: true,
                token: ''
            }
        default: 
        return state
    }

}

export default AuthReducer