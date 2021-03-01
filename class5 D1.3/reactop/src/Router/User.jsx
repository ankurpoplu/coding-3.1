import axios from 'axios';
import React from 'react'
import { Link, useParams } from "react-router-dom";
import UserCard from '../components/UserCard';

function User() {
    const [user, setUser] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const {id} = useParams();

    const getUser = (id) => {
        if (!id) {
            setIsError(true);
            return
        }
        axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
            setUser(res.data);
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsError(true)
            setIsLoading(false)
        });
    };

    React.useEffect(()=> {
        getUser(id);
    },[]);

    
    return isLoading ? (
        <div>...loading</div>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (
        <div>
            {" "}
            <UserCard {...user.data} />
            <br/>
            <Link to="/users">Go back</Link>
        </div>
    )
}

export default User
