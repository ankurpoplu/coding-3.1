import {ADD_COUNTER,REDUCE_COUNTER, ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, TOGGLE_TODO, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType";

const initialState = {
    counter:0,
    todo: [],
    status: false,
    isLoading: false,
    error: null
}

const reducer = (state=initialState, {type, payload}) => {

    switch (type) {
        // case ADD_TODO :
        //     return {
        //         ...state,
        //         todo: [...state.todo, payload]
        //     }
        // case TOGGLE_TODO:
        //     return {
        //         ...state,
        //         todo: state.todo.map(item => item.state === payload? {...item, status: !item.status}: item)
        //     }
        case ADD_COUNTER:{
            return {
                ...state,
                counter: state.counter + payload
            }
        }
        case REDUCE_COUNTER:{
            return {
                ...state,
                counter:state.counter - payload
            }
        }
        case ADD_TODO_REQUEST : 
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ADD_TODO_SUCCESS :
            return {
                ...state,
                todo: [...state.todo, payload],
                isLoading: false
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        case GET_TODO_REQUEST : 
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_TODO_SUCCESS :
            return {
                ...state,
                isLoading: false,
                todo : payload
            }
        case GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer