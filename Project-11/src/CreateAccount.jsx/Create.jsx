/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {auth, db} from "../../firebaseConfig"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import '../CSS/Create.css'

export default function Create() {

  const [name , setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
    const navigate = useNavigate()

    const handleCreate = (e)=>{
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,pass)
      .then(data=>{
        setDoc(doc(db,"users",data.user.uid),{
          name , email , address , phone
        })
        console.log("add")
        navigate("/dashboard");
      })
    }
  return (
    
<div className="signup-container">
    <h2>Sign Up</h2>
    <form onSubmit={handleCreate}>
        <div className="form-group">
            <label>Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={(e)=>setPass(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Address</label>
            <input type="text" id="address" placeholder="Enter your address" onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <div className="form-footer">
        <p>Already have an account? <Link to={"Login"}>Login here</Link></p>
    </div>
</div>
  )
}
