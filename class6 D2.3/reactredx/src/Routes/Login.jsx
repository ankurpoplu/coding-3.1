import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { authFailure, authSuccess } from '../Redux/Auth/action'
import { Redirect } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const isAuth =useSelector(state => state.auth.isAuth)
    const error =useSelector(state => state.auth.error)
    const isLoading =useSelector(state => state.auth.isLoading)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            email, password
        }

        axios.post('https://reqres.in/api/login', payload)
        .then (res => {
            dispatch(authSuccess(email, res.data.token))
        })
        .catch (error => {
            dispatch(authFailure(error))
        })
    }
    if(isAuth) {
        return(<Redirect to="/"/>)
    }
    return isLoading?(<div>...loading</div>):error?(<div>Something went wrong</div>):(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                    <input
                    placeholder = "Enter Email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input 
                    placeholder = "Enter Password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
