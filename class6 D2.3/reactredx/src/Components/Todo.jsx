import React from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, addTodoFailure, addTodoRequest, addTodoSuccess, getTodoFailure, getTodoRequest, getTodoSuccess} from '../Redux/Todo/action'
import Task from './Task'

const Todo = () => {

    const todo = useSelector(state => state.app.todo)
    const isLoading = useSelector(state => state.app.isLoading)
    const error = useSelector(state => state.app.error)
    const token = useSelector(state => state.auth.token)
    const email = useSelector(state => state.auth.email)
    const dispatch = useDispatch()

    
    // const handleClick = () => {
    //     dispatch(addTodo()
    // }
    React.useEffect(() => {
        fetchTodos()
    }, [])
    const fetchTodos = () => {
        dispatch(getTodoRequest())
        return axios
        .get('http://json-server-mocker-masai.herokuapp.com/tasks')
        .then(res => {
            const getTodoSuccessAction = getTodoSuccess(res.data)
            dispatch( getTodoSuccessAction)
        })
        .catch(err => {
            dispatch(getTodoFailure())
        })
    }

    const handleAdd = (task)  => {
        addTodo(task)
    }

    const addTodo = (task) => {

        const payload = {
            task,
            status: false
        }
        dispatch(addTodoRequest())
        return axios
        .post('http://json-server-mocker-masai.herokuapp.com/tasks', payload)
        .then(res => {
            const addTodoSuccessAction = addTodoSuccess(res.data)
            dispatch( addTodoSuccessAction)
            fetchTodos()
        })
        .catch(err => {
            dispatch(addTodoFailure())
        })
    }

    return (
        <div>
            <h1>Todo</h1>
            <h3>{token}</h3>
            <h3>{email}</h3>
            <Task handleAdd={handleAdd}/>
            { isLoading && <h3>...loading</h3> }
            { error && <div>Something went wrong</div>}
            <div>
                {todo.map((item => <div key={item.id}>{item.task}</div>))}
            </div>
        </div>
        
    )
}

export default Todo
