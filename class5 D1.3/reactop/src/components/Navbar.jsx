import React from 'react'
import {NavLink} from 'react-router-dom'

const links = [
    {
        to:"/",
        title:"Home",
        exact:true
    },
    {
        to:"/about",
        title:"About",
        exact:false
    },
    {
        to:"/users",
        title:"Users",
        exact:false
    }]

const Navbar = () => {
    return (
        <>
            {
                links.map(({to,title,exact}) =>(
                    <NavLink
                     exact={exact}
                     style={{padding:10}}
                     activeStyle={{color:"red"}}
                     to={to}
                     key={to}
                    >
                        {title}
                    </NavLink>
                ))   
            }
        </>
    )
}

export default Navbar
