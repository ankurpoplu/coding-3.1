import React,{useState} from "react"
import { GrAdd } from "react-icons/gr";
import styles from "./Input.module.css"

const Input = ({handleClick}) => {
    const [input,setInput] = useState("")
    const setChange = (e)=>{
            const {value} = e.target
            setInput(value)
    }
    return (
        <div className={styles.inpBox}>
            <input className={styles.inp} type="text" placeholder="Add-a-TODO..." value={input} onChange={setChange}/>
            <GrAdd style={{position:"absolute",fontSize:"26px",margin:"10px 150px 10px -290px",}} onClick={()=>{handleClick(input)}}></GrAdd>
        </div>
    )
}

export default Input