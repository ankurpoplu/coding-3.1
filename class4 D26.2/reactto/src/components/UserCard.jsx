import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({
    first_name,
    last_name,
    email,
    id,
    avatar
}) => {
    return (
        <div style={{
            display:'flex',
            width:'300px',
            padding: 10,
            margin: 10,
            outline: '1px solid black'
            }}>
            <div>
                <img src={avatar} alt={`profile_${id}`} />
            </div>
            <div>
                <h3> {`${first_name} ${last_name}`} </h3>
                <h6> {email} </h6>
                <Link to={`/users/${id}`}>See more details</Link>
            </div>
        </div>
    )
}

export default UserCard
