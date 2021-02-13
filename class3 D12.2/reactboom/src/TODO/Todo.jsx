import React,{useState} from "react"
import Input from "./Input"
import {v4 as uuid} from "uuid"
import DisplayList from "./DisplayList"

const Todo = () => {
    const [list,setList] = useState([])
    const handleClick = (e)=>{
            const payload = {
                id:uuid(),
                value:e,
                status:false

            }
            setList([...list,payload])
    }
    const handleDelete = (id)=>{
        const update = list.filter(e=>e.id !== id)
         setList(update)
    }
    const handleStatus = (id)=>{
        const update = list.map(function(e){
            if(e.id===id){
                e.status = !e.status
            }
            return e
        })
        setList(update)
    }
    return (
        <>
            <Input handleClick={handleClick}></Input>
            {list && list.map(item=><DisplayList key={item.id} list={item} handleDelete={handleDelete} handleStatus={handleStatus}></DisplayList>)}
        </>
    )
}

export default Todo