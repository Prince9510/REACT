import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        let response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        setData(response.data) // Set the fetched data to state
    }

    return (
        <div>
            <h1>Fetch API</h1>
            {
                data && data.map((e, i) => {
                    return (
                        <ul key={i}>
                            <li>{e.title}</li>
                            <li>{e.price}</li>
                            <li>{e.description}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
