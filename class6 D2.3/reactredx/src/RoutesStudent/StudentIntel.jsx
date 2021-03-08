import React from 'react'

function StudentIntel({id,name,score,state,school,dob}) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Score: {score}</h3>
            <h3>State: {state}</h3>
            <h3>School: {school}</h3>
            <h3>DOB: {dob}</h3>
        </div>
    )
}

export default StudentIntel
