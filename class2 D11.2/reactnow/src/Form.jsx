import React,{useState} from "react"
import Table from "./Table"
import {v4 as uuid} from "uuid"

const Form = () => {
    const [state,setState] = useState('')
    const [data,setData] = useState([])
    function inputHandler(e){
        const value = e.target.value
        // console.log(value)
        setState(value)
    }
    function clickHandler(){
        const payload = {
            id: uuid(),
            value: state,
            status: false
        }
        const newState = [...data,payload]
        console.log(newState)
        setData(newState)
    }
    const deleteData = (id)=>{
        const update = data.filter(e=>e.id !==id)
        setData(update)
    }
    const seeStatus = (i)=>{
        let updated = data.map(function(e){
            if(e.id === i){
                e.status = !e.status
            }
            return e
        })
        setData(updated)
    }
    return(
        <>
            <input type="text" placeholder="Enter here..." value={state} onChange={inputHandler}/>
            <button onClick={clickHandler}>ADD</button>
            {
                data.map(e=><Table data={e} deleteData={deleteData} seeStatus={seeStatus}/>)
            }

        </>
    )
}

export default Form