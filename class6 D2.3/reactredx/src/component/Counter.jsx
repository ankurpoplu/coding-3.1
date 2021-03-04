import React from 'react'
// import {ReduxContext} from "../Context/ReduxProvider"
import {useSelector} from "react-redux"
import CounterButton from './CounterButton'

function Counter() {
    // const {getState} = React.useContext(ReduxContext)
    // const {counter} = getState()
    const counter =  useSelector((state) => state.counter)
    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <CounterButton />
        </div>
    )
}

export default Counter
