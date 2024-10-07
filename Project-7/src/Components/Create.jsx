import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Create({data , setData}) {

  const navigation = useNavigate()
  const [name , setName] = useState("")
  const [city , setCity] = useState("")
  const [marks , setMarks] = useState("")

  const handleCreate=()=>{
    const Obj = {id : data.length + 1 , name : name , city : city , marks : marks}
    setData([...data , Obj])
    navigation("/")
  }


  return (
    
<div className="main">
  <nav className="inner-div">
    <Link to={"/"} className="text">Home</Link>
    <Link to={"/Create"} className="text">Add Data</Link>
    <Link to={"/Edit"} className="text">Edit Data</Link>
    <Link to={"/Delete"} className="text">Delete Data</Link>
  </nav>
  <h1 className="h1">Add New Student</h1>
  <form className="form">
    
    <label>Name</label>
    <input type="text" className="form-input" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
    <label>City</label>
    <input type="text" className="form-input" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/>
    <label>marks</label>
    <input type="text" className="form-input" placeholder="Enter marks" onChange={(e)=>setMarks(e.target.value)}/>
    <button className="btn" onClick={handleCreate}>Save</button>
  </form>
</div>

  )
}