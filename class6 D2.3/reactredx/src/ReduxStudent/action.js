import {GET_STUDENT_REQUEST,GET_STUDENT_SUCCESS,GET_STUDENT_FAILURE,REMOVE_STUDENT} from "./actionType"


const getStudentRequest = () => {
    return {
        type: GET_STUDENT_REQUEST
    }
}

const getStudentSuccess = (payload) => {
    return {
        type: GET_STUDENT_SUCCESS,
        payload
   }
}
const getStudentFailure = () => {
    return {
        type: GET_STUDENT_FAILURE
   }
}
const removeStudent = () =>{
    return {
        type: REMOVE_STUDENT
    }
}

export {getStudentRequest,getStudentSuccess,getStudentFailure,removeStudent}