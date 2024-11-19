/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}