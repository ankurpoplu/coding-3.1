import React from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import {getStudentRequest,getStudentSuccess,getStudentFailure} from "../ReduxStudent/action"
import StudentIntel from './StudentIntel'

function Home() {
    const student = useSelector(state => state.student)
    const isLoading = useSelector(state => state.isLoading)
    const error = useSelector(state => state.error)

    const dispatch = useDispatch()

    React.useEffect(() => {
        fetchStudent()
    }, [])

    const fetchStudent = () => {
        dispatch(getStudentRequest())
        return axios
        .get('https://b6d59ff7-26b3-4829-b3ad-c2caf6633454.mock.pstmn.io/mock')
        .then(res => {
            const getStudentSuccessAction = getStudentSuccess(res.data)
            dispatch( getStudentSuccessAction)
        })
        .catch(err => {
            dispatch(getStudentFailure())
        })
    }
    console.log(student)
    return (
        <div>
            <h1>STUDENT INTELSS</h1>
            { isLoading && <h3>...loading</h3> }
            { error && <div>Something went wrong</div>}
            <div>
                {student.map((item => <StudentIntel key={item.id} >{item}</StudentIntel>))}
            </div>
        </div>
    )
}

export default Home
