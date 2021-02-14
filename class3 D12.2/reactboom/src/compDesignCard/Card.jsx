import React from "react"
import style from "./card.module.css"

const Card = ({cardData})=>{
    const {first_name,last_name,location,discription,skills} = cardData
    console.log(skills)
    return(
        <div className={style.card}>
            <span className={style.App_span}>PRO</span>
            <img id={style.img1} src="img1.jpg" alt="img"></img>
            <h2>{first_name} {last_name}</h2>
            <h3>{location}</h3>
            <p className={style.detail}>{discription}</p>
            <div className={style.midBox}>
              <button className={style.mbtn} id={style.btn1}>Message</button>
              <button className={style.mbtn} id={style.btn2}>Following</button>
            </div>
            <div className={style.lowBox}>
              SKILLS
              <br></br>
              {skills.map(e=><button className={style.lbtn}>{e}</button>)}
              
            </div>
        </div>
    )
}

export default Card