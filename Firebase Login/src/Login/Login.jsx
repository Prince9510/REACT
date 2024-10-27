/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function Login() {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const navigate = useNavigate()

    const Login = async()=>{
        let user = await signInWithEmailAndPassword(auth,email,pass)
        console.log(user)
        if(user){
            navigate("/Dashborad")
        }
    }


  return (
    <div>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='Pass' onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={Login}>Login</button>
    </div>
  )
}
