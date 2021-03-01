import React from 'react'
import Card from './Card'
import data from "./data.json"

function Products() {
    return (
        <div>
            {data.map(e=><Card key={e.id} data={e}></Card>)}
        </div>
    )
}

export default Products
