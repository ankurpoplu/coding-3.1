import React,{useState,useEffect} from "react"

const Stopwatch = () =>{
    const [miliSec,setmiliSec] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            if(miliSec>=100?0:miliSec+1){
                setmiliSec(miliSec)
            }
            
        },10)
    },[miliSec])
    return(
        <div>
            <div>
                {/* <p>{sec}</p> */}
                <p>{miliSec}</p>
            </div>
            <div>
                {/* <button>{start?"Start":"Stop"}</button> */}
                {/* <button>{reset}</button> */}
            </div>
        </div>
    )
}

export default Stopwatch