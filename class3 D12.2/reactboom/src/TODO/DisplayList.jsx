import React from "react"
import { AiFillDelete } from "react-icons/ai";
import styles from "./List.module.css"

const DisplayList = ({list,handleDelete,handleStatus})=>{
    console.log(list)
    const {value,status,id} = list
    return(
        <>
            <ul className={styles.lst}>
            <li className={styles.sing} style={{textDecoration:status?"line-through":"none",color:status?"green":"gray"}} onClick={()=>{handleStatus(id)}}>{value}</li>
            <AiFillDelete style={{fontSize:"20px"}} onClick={()=>handleDelete(id)}></AiFillDelete>
            </ul>
        </>
    )
}

export default DisplayList