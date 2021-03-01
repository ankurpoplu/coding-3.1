import React from 'react'
import {NavLink} from 'react-router-dom'

function NavProduct() {

    return (
        <div >
            <NavLink style={{padding:10}} to="/">Home</NavLink>
            <NavLink style={{padding:10}} to='/products'>Products</NavLink>
            <NavLink style={{padding:10}} to='/cart'>Cart</NavLink>
        </div>
    )
}

export default NavProduct
