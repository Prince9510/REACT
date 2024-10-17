// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, EditData } from '../Configure/TaskSlice';
export default function TaskRedux() {
    const[name,setName]=useState("")
    const[description,setDescription]=useState("")
    const[assigned,setAssigned]=useState("")
    const[gender,setGender]=useState("")
    const[id,setId]=useState(null)
    const[priority , setPriority] = useState("")
    const storedData = useSelector((state)=>{
        return state.taskKey
    });
    const dispatch = useDispatch();
    const Add = () =>{
        if(id == null){
            dispatch(AddData({id:Date.now(),name,description,assigned,gender, priority}))
        }else{
            dispatch(EditData({id:id,name,description,assigned,gender,priority}))
            setId(null)
        }
        setName("")
        setDescription("")
        setAssigned("")
        setGender("")
        setTask("")
        setPriority("")
    }
    const Delete = (id) => {
        dispatch(DeleteData(id));
    }
    const Edit = (id) => {
    let DATA = storedData.AllData.find((item) => item.id == id)
    setId(id)
    setName(DATA.name)
    setDescription(DATA.description)
    setAssigned(DATA.assigned)
    setGender(DATA.gender)
    setTask(DATA.task)
    setPriority(DATA.priority)
    }
    return (
    <>
      <div className='main'>
        <p>Taks Manager</p>
        <label htmlFor="">Task Name:</label>
        <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /> 
        <label htmlFor="">Description:</label>
        <input type="text" value={description} placeholder='Enter description' onChange={(e)=>setDescription(e.target.value)} /> 
        <label htmlFor="">Assigned:</label>
        <input type="text" value={assigned} placeholder='Enter assigned name' onChange={(e)=>setAssigned(e.target.value)} /> 
        <label htmlFor="">Gender:</label>
        <select value={gender} id="task-gender" onChange={(e)=>setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="" className='pri'>Priority:</label>
      <select  value={priority} id="task-priority" onChange={(e)=>setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
        <button className="addbtn" onClick={Add}>{id ? "Update Data" : "Add Data"}</button> 

      
      </div>


      <table border={1}>  
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>    
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Gender</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    storedData?
                    storedData.AllData.map((e,i)=>{
                        return (
                            <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.description}</td>
                            <td>{e.assigned}</td>
                            <td>{e.priority}</td>
                            <td>{e.gender}</td>
                            <td>
                            <button className = "deletebtn" onClick={()=>Delete(e.id)}>Delete</button>
                            <button className='editbtn' onClick={()=>Edit(e.id)}>Edit</button>
                            </td>
                        </tr>
                        )
                    }) : "No Data Found"
                }
            </tbody>
        </table>
    </>
  )
}