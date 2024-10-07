import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Components/Edit'
import Delete from './Components/Delete'
import Create from './Components/Create'
export default function App() {

  const [data,setData] = useState([
    {id : 2 , name : "Soman" , city : "Rajkot" , marks : "99"},
    {id : 1 , name : "Aryan" , city : "Kachchh" , marks : "87"},
  ])
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data = {data}/>}></Route>
          <Route path='/Delete' element={<Delete data={data} setData={setData}/>}></Route>
          <Route path='/Create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/Edit' element={<Edit data={data} setData={setData}/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}
