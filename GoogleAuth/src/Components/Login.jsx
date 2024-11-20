import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'

export default function Login() {

    const handleLogin = async ()=>{
        await signInWithPopup(auth,provider)
        .then((user) =>{
            alert("Login Successfully")  
            console.log(user)

        })
        
    }
  return (
    <div>
      <h1>Login here</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
