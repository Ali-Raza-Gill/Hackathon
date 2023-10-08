import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from "../Pages/Frontend"
import Auth from "../Pages/Auth"
import Dashboard from "../Pages/Dashboard/Routes"
export default function Index() {
    return (
        <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={<Auth />} /> 
            <Route path='/dashboard/*' element={<Dashboard/>}/>
        </Routes>
    )
}
