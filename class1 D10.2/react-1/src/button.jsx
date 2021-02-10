import React from "react"
import style from "./button.module.css"

function Button1(){
    return(
        <div className={style.button}>
            <button className={style.mybtn} id={style.b1}>JOIN US</button>
        </div>
    )
}

function Button2() {
    return(
        <div className={style.button}>
            <button className={style.mybtn} id={style.b2}>SETTINGS</button>
        </div>
    )
}

function Button3() {
    return(
        <div className={style.button}>
            <button className={style.mybtn} id={style.b3}>LOGIN</button>
        </div>
    )
}

function Button4() {
    return(
        <div className={style.button}>
        <button className={style.mybtn} id={style.b4}>CONTACT US</button>
        </div>
    )
}

const Button5 = () => {
    return(
        <div className={style.button}>
        <button className={style.mybtn} id={style.b5}>SEARCH</button>
        </div>
    )
}

const Button6 = () => {
    return(
        <div className={style.button}>
        <button className={style.mybtn} id={style.b6}>HELP</button>
        </div>
    )
}

const Button7 = () => {
    return(
        <div className={style.button}>
        <button className={style.mybtn} id={style.b7}>HOME</button>
        </div>
    )
}

const Button8 = () => {
    return(
        <div className={style.button}>
        <button className={style.mybtn} id={style.b8}>DOWNLOAD</button>
        </div>
    )
}

export {Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8}