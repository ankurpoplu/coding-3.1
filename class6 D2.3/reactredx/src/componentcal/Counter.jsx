import React from 'react'
import {ReduxContext} from "../Context/ReduxProvider"
import CounterOperation from './CounterOperation'

function Counter() {
    const {getState} = React.useContext(ReduxContext)
    const {counter} = getState()
    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            {/* <InputCounter handleValue={handleValue}></InputCounter> */}
            <CounterOperation></CounterOperation>
        </div>
    )
}

export default Counter