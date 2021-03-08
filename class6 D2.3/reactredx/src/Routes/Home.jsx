import React from 'react'
import { Redirect } from 'react-router-dom'
import Todo from '../Components/Todo'
import {useSelector} from "react-redux"
import Counter from "../component/Counter"

const Home = () => {

    // const isAuth = useSelector(state => state.auth.auth)
    const token = useSelector(state => state.auth.token)
    if (!token) {
        return <Redirect to="/login"/>
    }
    return (
        <div>
            <Counter />
            <Todo/>
        </div>
    )
}

export default Home
