/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import '../CSS/Login.css' 
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const navigate = useNavigate()

    const Login =(e)=>{
      e.preventDefault()
        signInWithEmailAndPassword(auth,email,pass)
        .then(user=>{
          navigate("/dashboard")
        })
    }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={Login}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}/> 
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} value={pass}/>
        </div>
        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        <p>
          Don&apost have an account? <Link to="/">Sign up here</Link>
        </p>
      </div>
    </div>
  )
}