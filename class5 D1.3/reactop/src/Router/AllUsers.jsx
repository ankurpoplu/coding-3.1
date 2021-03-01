import React from 'react'
import axios from "axios"
import UserCard from '../components/UserCard'
import Pagination from '../components/Pagination'

function AllUsers() {
    const [response,setResponse] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const [page, setPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(null)

    const getUsers = (page = 1) => {
        setIsLoading(true)
        setIsError(false)
        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then(res=>{
            setIsLoading(false)
            setResponse(res.data)
        })
        .catch(err=>{
            setIsError(true)
        })
    }
    
    React.useEffect(()=>{
       getUsers(page) 
    },[page])

    const handleChangePage = (page) =>{
        setPage(page)
    }

    const {data} = response

    return isLoading ? (
    <div>..loading</div>
    ) : isError ? (
    <div>error</div>
    ) : (
        <>
        <Pagination
         handleChangePage={handleChangePage}
         totalPages={response.total_pages}
         currentPage={page}>
        </Pagination>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            {data?.map((item)=>(<UserCard {...item} key={item.id}></UserCard>
            ))}
        </div>
    </>    
    )
}

export default AllUsers
