import React, { useEffect, useState } from 'react'

export default function Crud() {


    const[name,setName] = useState("")
    const[subject,setSubject] = useState("")
    const[city,setCity] = useState("")

    const[record,setRecord] = useState(null)

    useEffect(()=>{
        let data= JSON.parse(localStorage.getItem("Student")) || []

        setRecord(data)
    },[record])

    const handleAdd=()=>{

        let user = {id: Date.now(),name,subject,city}
        record.push(user)
        localStorage.setItem("Student",JSON.stringify(record))  
    }

  return (
    <div>
      <h1>CRUD</h1>

      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)}/>
      <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/>


      <button onClick={handleAdd}>
        Add Data
      </button>



      <table border='1' width="100%">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>subject</th>
                <th>city</th>
            </tr>
        </thead>
        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>

                        <td>{e.subject}</td>
                        <td>{e.city}</td>

                    </tr>
                }) :
                "error"
            }
        </tbody>
      </table>
    </div>
  )
}
