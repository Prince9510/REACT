/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../firebaseConfig'
import { collection, deleteDoc, doc, getDoc, updateDoc, getDocs, addDoc } from 'firebase/firestore'
import '../CSS/Dashboard.css'

export default function Dashboard() {
    const [user, setUser] = useState(null)
    const [record, setRecord] = useState([])
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [task, setTask] = useState("")
    const [status, setStatus] = useState('pending')
    const [priority, setPriority] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let sub = onAuthStateChanged(auth,(currentUser) => {
            if(currentUser){
                setUser(currentUser)
                console.log(currentUser)
            }
        })
    },[])

    useEffect(()=>{
        if(user){
            fetchUser()
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

    const fetchUser = ()=>{
        console.log(user)
        getDoc(doc(db, "users", user.uid))
            .then(data => {
                console.log(data.data())
            })
    }

    const fetchData = async()=>{
        let allData = await getDocs(collection(db,"Todos"))
        let newData = allData.docs.map((data)=>({docId: data.id, ...data.data()}))
            //  console.log(newData)
        setRecord(newData)
    }

    const handleTask = async() =>{
        let obj = { uid: user.uid, task, priority , description , date , status}

        if (editIndex === null) {
            const addData = await addDoc(collection(db, "Todos"), obj)
            setRecord([...record,{docId: addData.id,...obj}]) 
        } else {
            await updateDoc(doc(db, "Todos", editIndex), obj) 
            fetchData()  
        }
        setTask('')
        setPriority('')
        setEditIndex(null)
        setDescription("")
        setDate("")
    }
    const handleDelete = async(id) => {
        await deleteDoc(doc(db,"Todos",id))
        setRecord(record.filter(item=>item.docId!==id))
    }
    const handleEdit =(id) => {
        let singleData = record.find(item =>item.docId === id)
        if (singleData) {
            setTask(singleData.task)
            setPriority(singleData.priority) 
            setDescription(singleData.description)
            setDate(singleData.date)
            setStatus(singleData.status)
            setEditIndex(id) 
        }
    }

    const handlestatus = async(id) => {
        const updatedTask = record.find(item => item.docId === id)
        if (updatedTask) {
            const updatedData = {...updatedTask,status:'completed'}
            await updateDoc(doc(db,'Todos',id),updatedData)
            fetchData() 
        }
    }

    return (
        <>

            <div className="task-container">
                <h2>Task Manager</h2>
                <div className="task-inputs">
                    <input type="text" className="inputs" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                    <input type="text" className="inputs" placeholder="Enter Priority" value={priority} onChange={(e) => setPriority(e.target.value)}/>
                    <input type="text" className="inputs" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input type="date" className="inputs" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <button className="task-btn" onClick={handleTask}>{editIndex === null ? "Add Task" : "Update Task"}</button>
                </div>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((e,i) => (
                            e.uid === user.uid ? ( 
                                <tr key={i}>
                                    <td>{e.task}</td>
                                    <td>{e.priority}</td>
                                    <td>{e.description}</td>
                                    <td>{e.date}</td>
                                    <td>{e.status}</td>
                                    <td>
                                        <button className="edit-btn" onClick={() => handleEdit(e.docId)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(e.docId)}>Delete</button>
                                        <button className="status-btn" onClick={() => handlestatus(e.docId)}>Compolete</button>
                                    </td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}
