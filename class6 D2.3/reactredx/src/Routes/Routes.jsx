import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const Routes = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="./login">Login</Link>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
