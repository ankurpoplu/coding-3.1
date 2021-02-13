import React from "react"

const Card = ({data}) => {
    const {stars,total_votes,reviews,cost_for_one,categories,payment_method,img,name,time} = data
    const {cash,card} = payment_method
    const payType = ()=>{
        if(cash===true){
            let payType = "cash"
            return payType
        }else if(card === true){
            let payType = "card"
            return payType
        }else if(cash===true&&card === true){
            let payType = "card & cash"
            return payType
        }
    }
    return(
        <>
            <img src={img} alt="foodimg"/>
            <h2>{name}</h2>
            <p>{categories.join(', ')}</p>
            <p>Cost ₹{cost_for_one} for one</p>
            <p>Up to {time}min</p>
            <p> accept payment in {cash?"cash":null} {card?"card":null}</p>
            <p>{stars}</p>
            <p>{total_votes}</p>
            <p>{reviews}</p>
        </>
    )
}

export default Card