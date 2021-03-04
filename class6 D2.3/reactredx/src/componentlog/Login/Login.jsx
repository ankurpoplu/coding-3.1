import React,{useState} from 'react'

function Login() {
    const [state,setState] = useState('')
    const [pstate,SetState] = useState('')
    const handleChange = (e)=>{
        const change = e.target.value
        setState(change)
    }
    const handlePchange = (e)=>{
        const change = e.target.value
        setState(change)
    }
    const handleSubmit = ()=>{
        
    }
    return (
        <form>
            <input type="text" placeholder="Enter name here" value={state} onChange={handleChange} />
            <input type="text" placeholder="Enter passward here" value={pstate} onChange={handlePchange}/>
            <button onClick={handleSubmit}></button>
        </form>
    )
}

export default Login
