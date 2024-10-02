import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='/About' element={<About/>}></Route>
      <Route path='/Contact/:id' Component={Contact}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}