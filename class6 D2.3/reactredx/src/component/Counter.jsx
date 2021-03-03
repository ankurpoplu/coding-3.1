import React from 'react'
import {ReduxContext} from "../Context/ReduxProvider"
import CounterButton from './CounterButton'

function Counter() {
    const {getState} = React.useContext(ReduxContext)
    const {counter} = getState()
    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <CounterButton />
        </div>
    )
}

export default Counter
