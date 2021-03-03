import React from 'react'
import { ReduxContext } from '../Context/ReduxProvider'
import {addCounter,reduceCounter} from "../redux/Action"

function CounterButton() {
    const {dispatch} = React.useContext(ReduxContext)

    const handleAdd = () =>{
        const addAction = addCounter(1)
        dispatch(addAction)
    }
    const handleReduce = () =>{
        const reduceAction = reduceCounter(1)
        dispatch(reduceAction)
    }

    return (
        <>
            <div>
                <button onClick={ handleAdd}>ADD</button>  
            </div> 
            <div>
                <button onClick={ handleReduce}>REDUCE</button>  
            </div> 
        </>
    )
}

export default CounterButton
