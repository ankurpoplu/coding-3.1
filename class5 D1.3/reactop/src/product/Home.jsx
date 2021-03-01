import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const data = ['user','ankur','anil','mukesh']
    const [state,setState] = useState("")
    const [user,setUser] = useState([])

    const handleChange = (e)=>{
        const value = e.target.value
        setState(value)
        console.log(value)
    }
    function handleLogin(){
        // data.map(function(e){
        //     if(e == state){
            //    return
                <Link to='/products'/>
        //     }else{
        //         return alert('Wrong user!')
        //     }
        // })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <input type="text" placeholder='Enter user name' value={state} onChange={handleChange}/>
            <button onclick={handleLogin}>Login</button>
        </div>
    )
}

export default Home
