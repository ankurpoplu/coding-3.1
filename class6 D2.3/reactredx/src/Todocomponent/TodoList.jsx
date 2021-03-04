import React from 'react'
import TodoInplist from './TodoInplist'
import {useSelector} from "react-redux"
function TodoList() {
    const todo = useSelector((state) => state.todo)
    return (
        <div>
            {
                todo.map((e)=>
                    <TodoInplist key={e.id} name={e}></TodoInplist>
                )
            }
        </div>
    )
}

export default TodoList
