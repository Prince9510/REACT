import React, { useEffect, useState } from 'react'

export default function Api() {
    const [data , setData] = useState("")

    useEffect(()=>{
        fetchData() // Use fetchData instead of fetch directly
    },[])

    const fetchData = async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        console.log(response)

        const res = await response.json()
        console.log(res)
        setData(res)
    }

    return (
        <div>
            <h1>Fetch API</h1>
            {
                data && data.map((e,i)=>{
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
