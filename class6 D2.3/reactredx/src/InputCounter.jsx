import React from 'react'
// import { addCounter } from './redux/Action'
// import {useDispatch} from "react-redux"

function InputCounter({handleValue}) {
    const [state,setState] = React.useState(0)
    // const dispatch = useDispatch()

    return (
        <div>
            <input type="number" placeholder="enter number to add" value={state} onChange={(e)=>setState(e.target.value)} />
            <button onClick={handleValue(state)}>ADD INPUT</button>
        </div>
    )
}

export default InputCounter
