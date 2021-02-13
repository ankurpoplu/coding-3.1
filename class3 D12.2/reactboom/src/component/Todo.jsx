import React ,{useState}from "react"
import Input from "./Input"
import {v4 as uuid} from "uuid"
import InputTwo from "./InputTwo"

const Todo = ()=>{
    const [todo,setTodo] = useState([])
    const handleInput = (e)=>{
        const payload = {
            id:uuid(),
            value:e,
            status:false
        }
        setTodo([...todo,payload])
    }
    const handleToggle = (id)=>{
        let data = todo.map(function(e){
            if(e.id === id){
                e.status = !e.status
            }
            return e
        })
        setTodo(data)
    }
    console.log(todo)
    return(
        <div>
            <h1>TODO</h1>
            <Input handleInput={handleInput}></Input>
            {todo && todo.map(item=><InputTwo key={item.id} todo={item} handleToggle={handleToggle}></InputTwo>)}
        </div>
    )
}

export default Todo