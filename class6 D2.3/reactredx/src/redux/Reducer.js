import {ADD_COUNTER,REDUCE_COUNTER} from "./ActionType"

const initState = {
    counter:0
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
        default :{
            return state
        }
    }
} 
