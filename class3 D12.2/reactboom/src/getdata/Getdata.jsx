import React,{useState,useEffect} from "react"

const Getdata = ()=>{
    const [input,setInput] = useState("")
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)
    // const []
    useEffect(()=>{
        getInfo()
    },[])
    const getInfo = ()=>{
        console.log("here")
        setLoading(true)
         fetch("https://json-server-mocker-masai.herokuapp.com/users")
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>setError(true))
        .finally(() => setLoading(false))
    }
    const addData=()=>{
        const payload = {
            name: input,
            rating:4,
            age:26
        }
        fetch("https://json-server-mocker-masai.herokuapp.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then(() => getInfo())
        .catch((err)=>setError(true))
        .finally(() => setLoading(false))
    }
    // const getResult
    return(
        <div>
            <input type="text" placeholder="enter here..." value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addData}>ADD</button>
            {data && data.map(item=><p>{item.name}</p>)}
        </div>
    )
}

export default Getdata