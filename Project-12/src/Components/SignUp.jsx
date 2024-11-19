/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/SignUp.css'
import {auth, db} from "../../firebaseConfig"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {
    const [name , setName] = useState("")
   const [email,setEmail] = useState("")
   const [pass,setPass] = useState("")
   const [address,setAddress] = useState("")
   const [phone,setPhone] = useState("")
   const navigate = useNavigate()

   const handleCreate =(e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,pass)
    .then(data=>{
      setDoc(doc(db,"users",data.user.uid),{
        name,email,address,phone
      })
      console.log("add")
      navigate("/dashboard")
    })
  }
  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleCreate} className="signup-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} value={pass}/>
        </div>

        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} value={address}/>
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} value={phone}/>
        </div> 
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <div className="form-footer">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  )
}
