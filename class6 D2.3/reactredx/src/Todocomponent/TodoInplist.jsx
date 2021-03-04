import React from 'react'
import { toggleTodo } from '../redux/Action'
import {useDispatch} from "react-redux"

function TodoInplist({name}) {
    const {title,status,id} = name
    console.log(title,status)
    const dispatch = useDispatch()
    const handleStatus = ()=>{
        
        dispatch(toggleTodo(id)) 
    }

    return (
        <div>
            <h3>{title}</h3>
            <h5>status: {status?"Complete":"Incomplete"}</h5>
            <button onClick={handleStatus}>ToggleStatus</button>
        </div>
    )
}

export default TodoInplist
