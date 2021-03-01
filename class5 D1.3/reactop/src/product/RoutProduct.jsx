import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Home from "./Home"
import Products from './Products'

function RoutProduct() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path='/products'>
                    <Products></Products>
                </Route>
                <Route path='/cart'>
                    <Cart></Cart>
                </Route>
            </Switch>
        </div>
    )
}

export default RoutProduct
