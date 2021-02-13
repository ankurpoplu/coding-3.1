import React from "react"

const InputTwo = ({todo,handleToggle})=>{
    console.log(todo)
    const {id,value,status} = todo
    return(
        <div>
            <p>{value}</p>
            <button onClick={()=>handleToggle(id)}>{status?"complete":"incomplete"}</button>
        </div>
    )
}

export default InputTwo