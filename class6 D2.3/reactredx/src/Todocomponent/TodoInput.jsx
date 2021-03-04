import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodos } from '../redux/Action';
import {v4 as uuid } from "uuid"

function TodoInput() {
    const [title,setTitle] = useState("")
    const dispatch = useDispatch();
    const handleAdd = () =>{
        const payload = {
            title,
            status:false,
            id: uuid()
        }
        dispatch(addTodos(payload))
    }
    return (
        <div>
            <h3>ADD TODO</h3>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="add todo"/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput
