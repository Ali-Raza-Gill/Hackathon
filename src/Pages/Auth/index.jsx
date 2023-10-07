import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import ForgotPassword from "../Auth/ForgotPassword"
export default function index() {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  )
}
