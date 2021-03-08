import React from 'react'
// import {ReduxContext} from "../Context/ReduxProvider"
import {useSelector,shallowEqual} from "react-redux"
import CounterButton from './CounterButton'

function Counter() {
    // const {getState} = React.useContext(ReduxContext)
    // const {counter} = getState()
    const counter =  useSelector((state) => state.app.counter,shallowEqual)
    // console.log(counter)
    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <CounterButton />
        </div>
    )
}

export default Counter
