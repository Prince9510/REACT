import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Edit({data , setData}) {
  const navigation = useNavigate()
      const [id,setId] = useState("")

      const [name , setName] = useState("")
      const [city , setCity] = useState("")
      const [marks , setMarks] = useState("")

      const handleGetData=()=>{
        const Obj = data.find((item)=> item.id === JSON.parse(id))

        if(Obj){
          setName(Obj.name)
          setCity(Obj.city)
          setMarks(Obj.marks)
        }else{
          alert("Data Not Found")
        }
      }


      const handleEditData = () => {
        let newData = data.map((item) => {
          if (item.id === Number(id)) {
            return { ...item, name, city, marks };
          } else {
            return item;
          }
        });
      
        setData(newData);
        navigation("/");
      };
      



  return (
    
<div className="main">
  <nav className="inner-div">
   <Link to={"/"} className="text">Home</Link>
    <Link to={"/Create"} className="text">Add Data</Link>
    <Link to={"/Edit"} className="text">Edit Data</Link>
    <Link to={"/Delete"} className="text">Delete Data</Link>
  </nav>
  <h1 className="h1">Edit Student</h1>
  <form className="form">
    <label>Roll No</label>
    <div className="input-group">
      <input type="text" className="form-input" placeholder="Enter Roll No" onChange={(e)=>setId(e.target.value)}/>
      <button onClick={handleGetData} className="btn btn-secondary" type="button" >Get Data</button>
    </div>
    <label>Name</label>
    <input type="text" value={name} className="form-input" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
    <label>City</label>
    <input type="text" value={city} className="form-input" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/>
    <label>marks</label>
    <input type="text" value={marks} className="form-input" placeholder="Enter marks" onChange={(e)=>setMarks(e.target.value)}/>
    <button onClick={handleEditData} className="btn">Update</button>
  </form>
</div>

  )
}
