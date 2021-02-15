import React,{useState} from "react"
import data from "./data.json"
import style from "./grocery.module.css"
import Output from "./Output"

const Grocery = ()=>{
    const increaseCount = (e)=>{}
    return(
        <div className={style.Grocery}>
            <h1 id={style.tit}>Grocery List</h1>
            <div id={style.pag}>
                
            </div>
            {data.map(e=><Output className={style.box} key={data.id} data={e} increaseCount={increaseCount}></Output>)}
        </div>
    )
}

export default Grocery