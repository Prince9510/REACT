/* eslint-disable no-unused-vars */
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {db, auth } from '../../firebaseConfig'
import '../CSS/Dashboard.css'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashborad() {


      const [user,setUser] = useState(null)
      const [username,setUserName] = useState("")
      const [email,setEmail] = useState("")
      const [phone,setPhone] = useState("")
      const [address,setAddress] = useState("")

      useEffect(()=>{
        let sub = onAuthStateChanged(auth,(currentUser)=>{
          if(currentUser){
            setUser(currentUser)
            console.log(currentUser)
          }
        })
      },[])
      
      useEffect(()=>{
        if(user){
          fetchUser()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[user])




      const fetchUser =()=>{
        console.log(user)
        getDoc(doc(db,"users",user.uid))
        .then(data=>{
          console.log(data.data())
          const fetchName = data.data().name
          const fetchEmail = data.data().email
          const fetchPhone = data.data().phone 
          const fetchAddress = data.data().address 

          setUserName(fetchName)
          setEmail(fetchEmail)
          setPhone(fetchPhone)
          setAddress(fetchAddress)
        })
      }
  return (
    <div className="dashboard">
    <h2>Admin Details</h2>
    <div className="info">
      <label>Name:</label>
      <p>{username}</p>
    </div>
    <div className="info">
      <label>Email:</label>
      <p>{email}</p>
    </div>
    <div className="info">
      <label>Phone:</label>
      <p>{phone}</p>
    </div>
    <div className="info">
      <label>Address:</label>
      <p>{address}</p>
    </div>
  </div>
  )
}