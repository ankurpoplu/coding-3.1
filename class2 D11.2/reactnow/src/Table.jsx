import React from "react"

const Table = ({data,deleteData,seeStatus})=>{
    return(
        <>
            <p id={data.id} style={{color:data.status ? "green" : "red",fontWeight:600}} onClick={()=>seeStatus(data.id)}>{data.value}</p>
            <button onClick={()=>deleteData(data.id)}>DELETE</button>
        </>
    )
}

export default Table