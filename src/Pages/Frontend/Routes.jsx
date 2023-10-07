import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NoPage from './NoPage'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
export default function Index() {
    return (
        <main>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
            <Footer/>
        </main>
    )
}
