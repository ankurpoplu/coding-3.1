import React,{useState} from "react"

const Input = ({handleInput}) =>{
    const [state,setState] = useState("")
    const handleChange = (e)=>{
        const {value} = e.target
        setState(value)
    }
    return(
        <>
        <input type="text" placeholder="enter here..." value={state} onChange={handleChange}/>
        <button onClick={()=>handleInput(state)}>ADD</button>
        </>
    )
}

export default Input