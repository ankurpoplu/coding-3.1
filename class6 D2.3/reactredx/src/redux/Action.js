import {ADD_COUNTER, REDUCE_COUNTER, MULTIPLY_COUNTER, DIVIDE_COUNTER} from "./ActionType"


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

const multiplycounter = payload => {
    return {
        type: MULTIPLY_COUNTER,
        payload
    }
}

const dividecounter = payload => {
    return {
        type: DIVIDE_COUNTER,
        payload
    }
}

export {addCounter,reduceCounter,multiplycounter,dividecounter}