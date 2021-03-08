import {GET_STUDENT_REQUEST,GET_STUDENT_SUCCESS,GET_STUDENT_FAILURE,REMOVE_STUDENT} from "./actionType"

const initialState = {
    counter:0,
    student: [],
    status: false,
    isLoading: false,
    error: null
}

const reducer = (state=initialState, {type, payload}) => {

    switch (type) {
        case GET_STUDENT_REQUEST : 
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_STUDENT_SUCCESS :
            return {
                ...state,
                isLoading: false,
                student : payload
            }
        case GET_STUDENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case REMOVE_STUDENT:
            return {
                ...state,
                student:[...state.filter(e=>e.id!==payload?e:null)]
            }
        default:
            return state;
    }
}

export default reducer