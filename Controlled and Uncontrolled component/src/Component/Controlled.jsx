import React, { useState } from 'react'

export default function Controlled() {


    const[name,setName] = useState("")
    
  return (
    <div>
      <h1>Controlled Component</h1>  

      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <h1>{name}</h1>
    </div>
  )
}