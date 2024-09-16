    import React, { useState } from 'react'

    export default function FormValidation() {

        const [name,setName] = useState("")
        const [email,setEmail] = useState("")
        const [phone,setPhone] = useState("")
        const [password,setPassword] = useState("")
        const [confirmpassword,setConfirmpassword] = useState("")




        const [nameerr,setNameerr] = useState("")
        const [emailerr,setEmailerr] = useState("")
        const [phoneerr,setPhoneerr] = useState("")
        const [passworderr,setPassworderr] = useState("")
        const [confirmpassworderr,setConfirmpassworderr] = useState("")


    const formSubmit=(e)=>{
            e.preventDefault()

            if(!name){
                setNameerr("Name Required")
            }else{
                setNameerr("")
                console.log(name)
            }


            if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone)){
                setPhoneerr("Only Phone Numbers")
            }else{
                setPhoneerr("")
                console.log(phone)
            }

            if(!email){
                setEmailerr("Enter Valid Email")

            }else{
                setEmailerr("")
                console.log(email)
            }
            
            if(!password){
                setPassworderr("Enter Valid Password")
            } else {
                setPassworderr("")
                console.log(password)
            }

            if (!confirmpassword) {
                setConfirmpassworderr("Confirm Password Required");
            } else if (password !== confirmpassword) {
                setConfirmpassworderr("Passwords do not match");
            } else {
                setConfirmpassworderr("");
                console.log(confirmpassword);
            }   



        }



    return (
        <div className='main'>

            <form onSubmit={(e)=>{formSubmit(e)}}>

                <h1>Register</h1>
                <br />
                <input className='name' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                <span>{nameerr}</span>
                <input className='phone' type="text" placeholder='Phone' onChange={(e)=>setPhone(e.target.value)}/>
                <span>{phoneerr}</span>
                <input className='email' type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <span>{emailerr}</span>
                <input className='password' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <span>{passworderr}</span>
                <input className='confirmpassword' type="password" placeholder='Confirm Password' onChange={(e)=>setConfirmpassword(e.target.value)}/>
                <span>{confirmpassworderr}</span>

        <br />

                <button className='register'>
                    Register
                </button>
                

            </form>
        </div>
    )
    } 