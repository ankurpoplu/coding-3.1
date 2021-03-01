import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import AllUsers from './AllUsers'
import User from './User'

function Routes() {
    return (
        <>
          {/* <Navbar/> */}
          <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>  
            <Route path="/about">
                <About/>
            </Route>
            <Route exact path="/users">
                <AllUsers/>
            </Route>
            <Route path="/users/:id" component={User}>
                <User />
            </Route> 
            <Route>
                <h3>Page not found</h3>
            </Route>
          </Switch>
        </>
    )
}

export default Routes
