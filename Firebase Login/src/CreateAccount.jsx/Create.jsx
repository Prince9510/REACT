/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebaseConfig"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function Create() {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()

    const handleCreate= async ()=>{
        let user = await createUserWithEmailAndPassword(auth,email,pass)
        console.log(user)

        if(user){
            navigate("/Dashborad")
        }
    }
  return (
    <div>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={handleCreate}>Create A Account</button>
      <Link to={"Login"}>Sign IN?</Link>
    </div>
  )
}
