import React,{useState} from 'react'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import data from "./data.json"

function Cart() {
    // const {id} = inf
    // let [name,setName] = useState('')
    // let [price,setPrice] = useState(0)
    // function process(){
    //     data.map(function(e){
    //         if(e.id === id){
    //             setName( e.name)
    //             setPrice( e.price)
    //             // return 
    //         }
    //         return
    //     })
    // }
    const [counter,setCounteer] = useState(0)
    // let [cost,setCost] = useState(0)
    // function handleProductCost(){
    //     setCost( counter * price)
    // }
    return (
        <div>
            {/* <div>
                <h2 onchange={process}>{name}</h2>
            </div> */}
            <div>
                    <AiOutlineMinus  onClick={()=>setCounteer(counter>0?counter-1:counter)}></AiOutlineMinus>
                    <p >{counter}</p>
                    <AiOutlinePlus onClick={()=>setCounteer(counter>=0?counter+1:counter)}></AiOutlinePlus>
            </div>
            {/* <button onClick={handleProductCost}>Add product</button> */}
            {/* <h2>{cost}</h2> */}
            {/* <h2 handleCart={handleCart}></h2> */}
        </div>
    )
}

export default Cart
