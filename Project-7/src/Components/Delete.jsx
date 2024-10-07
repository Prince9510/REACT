import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom';


export default function Delete({data , setData}) {

    const navigate = useNavigate()
    const [id , setId] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [marks, setMarks] = useState("")

    const getDeleteData = () => {

        let oldData = data.find((item) => item.id === JSON.parse(id))  
        
        if (oldData) {
          setName(oldData.name)
          setCity(oldData.city)
          setMarks(oldData.marks)
       
        } else {
          alert("Student not found")
        }
    }

    const deleteData = () => {
        let newold = data.filter((item) => item.id !== JSON.parse(id))
        setData(newold)
        navigate("/")
    }

    return (
        <div className="main">
            <nav className="inner-div">
                <Link to={"/"} className="text">Home</Link>
                <Link to={"/Create"} className="text">Add Data</Link>
                <Link to={"/Edit"} className="text">Edit Data</Link>
                <Link to={"/Delete"} className="text">Delete Data</Link>
            </nav>
            <h1 className="h1">Delete Student</h1>
            <form className="form">
                <label>Roll No</label>
                <div className="input-group">
                    <input type="text" className="form-input" placeholder="Enter Roll No" onChange={(e) => setId(e.target.value)}/>
                    <button onClick={getDeleteData} className="btn btn-secondary" type="button">
                        Get Data
                    </button>
                </div>
                <label>Name</label>
                <input type="text" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                <label>City</label>
                <input type="text" value={city} className="form-input" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
                <label>marks</label>
                <input type="text" value={marks} className="form-input" placeholder="Enter marks" onChange={(e) => setMarks(e.target.value)} />
                <button className="btn btn-danger" onClick={deleteData}>Delete</button>
            </form>
        </div>
    )
}
