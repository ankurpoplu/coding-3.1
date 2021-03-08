import React from "react"
import {addCounter,reduceCounter} from "../Redux/action"
import {useDispatch, useSelector} from "react-redux"

const Counter = () =>{
    const dispatch = useDispatch()
    const counter = useSelector((state)=>state.counter)

    const handleAdd = ()=>{
        dispatch(addCounter(1))
    }

    const handleReduce = ()=>{
        dispatch(reduceCounter(1))
    }

    return (
        <>
        <h1> Counter: {counter} </h1>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleReduce}>REDUCE</button>
        </>
    )
}

export {Counter}