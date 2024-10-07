import React, { useState } from 'react'

export default function Filter() {

    const [name , setName] = useState("")

    const arr = [
        {name : "Alex" , age : 18 , contry : "india"},
        { name: "Rahul", age: 22, country: "India" },
        { name: "Emily", age: 25, country: "USA" },
        { name: "Sara", age: 20, country: "UK" },
        { name: "Carlos", age: 30, country: "Spain" },
        { name: "Ming", age: 28, country: "China" },
        { name: "Sophia", age: 19, country: "Canada" },
        { name: "Ravi", age: 24, country: "India" },
        { name: "Kaito", age: 26, country: "Japan" },
        { name: "Ana", age: 21, country: "Brazil" },
        { name: "Liam", age: 27, country: "Australia" },
    ]

    const data = arr.filter((item)=> item.name.includes(name))
  return (
    <div>
       <center>
        <h1>Filter</h1> <br/>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
        {
            data && 
            data.map((e,i) => {
            return <ul key={i} style={{listStyle:"none"}}>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    <li>{e.country}</li>
                    </ul>
            })
    }
      </center>
    </div>
  )
}
