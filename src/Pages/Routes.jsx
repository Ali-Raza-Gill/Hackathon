import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from "../Pages/Frontend"
import Auth from "../Pages/Auth"
export default function Index() {
    return (
        <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={<Auth />} />
        </Routes>
    )
}
