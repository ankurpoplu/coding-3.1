import React,{useState} from "react"
import style from "./output.module.css"
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

const Output = ({data})=>{
    const [counter,setCounteer] = useState(0)
    const {product_name,image_url,description,is_available,price,id} = data
    return(
        <div className={style.Output}>
            <div className={style.lef}>
                <img id={style.img1} src={image_url} alt="img"/>
            </div>
            <div className={style.lef}>
                <h3 className={style.dsl}>{product_name}</h3>
                <p className={style.dsl}>{description}</p>
                <p className={style.dsl}>Price : ₹{price}</p>
            </div>
            <div className={style.lef}>
                <div id={style.cnt}>
                    <AiOutlineMinus className={style.inc} onClick={()=>setCounteer(counter>0?counter-1:counter)}></AiOutlineMinus>
                    <p id={style.val}>{counter}</p>
                    <AiOutlinePlus className={style.inc} onClick={()=>setCounteer(counter>=0?counter+1:counter)}></AiOutlinePlus>
                </div>
                <p id={style.stock} style={{backgroundColor:is_available?"rgb(213,232,212)":"rgb(248,206,204)",border:is_available?"1px solid green":"1px solid red"}}>{is_available?"High Stock":"Low Stock"}</p>
            </div>
        </div>
    )
}

export default Output