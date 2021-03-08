import {ADD_COUNTER,ADD_TODOS,DIVIDE_COUNTER,MULTIPLY_COUNTER,REDUCE_COUNTER, TOGGLE_TODO} from "./ActionType"

const initState = {
    counter:0,
    todo:[]
}

export const Reducer = ( state = initState , {type,payload}) => {
    console.log(type,payload,state)
    switch(type){
        case ADD_COUNTER:{
            return {
                ...state,
                counter: state.counter + payload
            }
        }
        case REDUCE_COUNTER:{
            return {
                ...state,
                counter: state.counter - payload
            }
        }
        case MULTIPLY_COUNTER:{
            return {
                ...state,
                counter: state.counter * payload
            }
        }
        case DIVIDE_COUNTER:{
            return {
                ...state,
                counter: state.counter / payload
            }
        }
        case ADD_TODOS:{
            return {
                ...state,
                todo:[...state.todo,payload]
            }
        }
        case TOGGLE_TODO:{
            return {
                todo: state.todo.map(e=>e.id===payload?{...e,status:!e.status}:e)
            }
        }
        default :{
            return state
        }
    }
} 
