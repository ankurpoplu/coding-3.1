import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"


const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}

const authSuccess = (email, token) => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            email,
            token
        }
    }
}

const authFailure = (error) => {
    return {
        type: AUTH_FAILURE,
        payload: error
    }
}
const LoginUser = (payload) => (dispatch) =>{
    const{email,password} = payload
    dispatch(authRequest(email,password))
    return axios
        .post('https://reqres.in/api/login',payload)
        .then(res=>{
            dispatch(authSuccess(email,res.data.token))
        })
        .catch (error => {
            dispatch(authFailure(error))
        })
}

export {
    LoginUser,
    authRequest,
    authSuccess,
    authFailure
}