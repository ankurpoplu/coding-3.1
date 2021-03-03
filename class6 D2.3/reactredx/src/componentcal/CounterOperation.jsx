import React from 'react'
import { ReduxContext } from '../Context/ReduxProvider'
// import InputCounter from '../InputCounter'
import {addCounter,reduceCounter,multiplycounter,dividecounter} from "../redux/Action"

function CounterOperation() {
    const {dispatch} = React.useContext(ReduxContext)
    const [state,setState] = React.useState(0)
    // const {state} = value
    const handleAdd = () =>{
        const addAction = addCounter(Number(state))
        dispatch(addAction)
    }
    const handleReduce = () =>{
        
        const reduceAction = reduceCounter(Number(state))
        dispatch(reduceAction)
    }
    const handleDivide = () =>{
        const reduceAction = dividecounter(Number(state))
        dispatch(reduceAction)
    }
    const handleMultiply = () =>{
        const reduceAction = multiplycounter(Number(state))
        dispatch(reduceAction)
    }

    return (
        <div>
            <input type="number" placeholder="enter number to add" value={state} onChange={(e)=>setState(e.target.value)} />
            <div>
                <button onClick={ handleAdd}>{`ADD ${state}`}</button>  
            </div> 
            <div>
                <button onClick={ handleReduce}>{`REDUCE ${state}`}</button>  
            </div> 
            <div>
                <button onClick={ handleDivide}>{`DIVIDE ${state}`}</button>  
            </div> 
            <div>
                <button onClick={ handleMultiply}>{`MULTIPLY ${state}`}</button>  
            </div> 
        </div>
    )
}

export default CounterOperation
