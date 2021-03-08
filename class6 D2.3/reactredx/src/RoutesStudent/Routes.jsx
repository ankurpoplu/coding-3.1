import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Student from './Student'

const Routes = () => {
    return (
        <div style={{margin:10}}>
            <Link style={{padding:10}} to="/">Home</Link>
            <Link style={{padding:10}} to="./login">StudentIntl</Link>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/student:id">
                    <Student/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
