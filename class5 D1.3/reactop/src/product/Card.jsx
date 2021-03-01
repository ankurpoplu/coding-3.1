import React from 'react'
import Cart from './Cart'

function Card({data,handleCart}) {
    const {id,name,category,price} = data
    return (
        <div>
            <h1>{name}</h1>
            <h3>Catogory: {category}</h3>
            <p>Price: ₹{price}</p>
            <button onClick={<Cart inf={id}/>}>Add to cart</button>
        </div>
    )
}

export default Card
