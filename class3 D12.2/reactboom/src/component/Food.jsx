import React from "react"
import data from "../data.json"
import Card from "./Card" 

const Food = () => {
    return(
        <div>
            {data.map(e=><Card key={data.id} data={e}></Card>)}
        </div>
    )
}

export default Food