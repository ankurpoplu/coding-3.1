import { ADD_COUNTER ,REDUCE_COUNTER, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

// const addTodo = (payload) => ({
//    type: ADD_TODO,
//    payload: {
//        title: payload,
//        status: false
//    }
// })

// const toggleTodo = (payload) => ({
//     type: TOGGLE_TODO,
//     payload
// })

const addCounter = (payload) =>{
    return{
        type:ADD_COUNTER,
        payload
    }
} 

const reduceCounter = payload => {
    return {
        type: REDUCE_COUNTER,
        payload
    }
}

const addTodoRequest = (payload) => {
    return {
        type: ADD_TODO_REQUEST,
        payload
    }
}

const addTodoSuccess = (payload) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload
   }
}
const addTodoFailure = () => {
    return {
        type: ADD_TODO_FAILURE
   }
}

const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST
    }
}

const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload
   }
}
const getTodoFailure = () => {
    return {
        type: GET_TODO_FAILURE
   }
}


export {
        addTodoFailure,
        addTodoRequest,
        addTodoSuccess,
        getTodoFailure,
        getTodoSuccess,
        getTodoRequest,
        addCounter,
        reduceCounter
}