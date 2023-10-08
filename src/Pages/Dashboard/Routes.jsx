import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Courses from './Courses/Courses'
import Students from './Students/Students'
import Attendence from './Attendence/Attendence'
import Nav from '../../Components/Nav/Nav'
import CourseList from './CourseList/CourseList'

export default function Index() {
  return (
    <main>
        <Nav/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='courses' element={<Courses/>}/>
        <Route path='courses-list' element={<CourseList/>}/>
        <Route path='students' element={<Students/>}/>
        <Route path='attendence' element={<Attendence/>}/>
    </Routes>
    </main>
  )
}
