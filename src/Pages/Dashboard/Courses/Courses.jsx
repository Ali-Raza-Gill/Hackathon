import React, { useState } from 'react'
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../Config/firebase';
import { Link } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
let initialstate = {
    coursename: "",
    coursecode: "",
    coursedescription: ""
}

export default function Courses() {

    const [state, setState] = useState(initialstate);
    const [isProcessing, setIsProcessing] = useState(false)

    const handlechange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        let { coursename, coursecode, coursedescription } = state
        coursename = coursename.trim();
        coursecode = coursecode.trim();
        coursedescription = coursedescription.trim();
        if (coursename.length < 3) {

            return window.toastify('Enter more then 3 letters in courseName', 'error')
        }
        if (coursecode.length < 3) {
            return window.toastify("Enter correct courseCode", "error")
        }
        if (coursedescription.length < 10) {
            return window.toastify("Enter more then 5 words courseDescription", "error")
        }
        let course = { coursename, coursecode, coursedescription }
        course.dateCreated = serverTimestamp()
        course.id = Math.random().toString(36).slice(2)
        createDocument(course)
        console.log(state)
    }

    const createDocument = async (course) => {
        try {
            // Assuming you have 'db' imported from Firebase somewhere in your code.
            await setDoc(doc(db, 'course', course.id), course);
            window.toastify('Course is added successfully', 'success');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col  col-lg-6 offset-lg-3  my-5 ">
                        <div className="row">
                            <div className="col  ">
                                <h1 className='text-center mb-4'>Add Course</h1>
                            </div>
                        </div>
                        <div className="card p-lg-4 p-md-3 p-sm-2 shadow" style={{ backgroundColor: "#F1FAEE" }}  >
                            <div className="form "  >
                                <div className="row mb-4">
                                    <div className="col col-md-6">
                                        <input type="text" id='coursename' name='coursename' className='w-100 py-2  px-3' onChange={handlechange} placeholder='Enter Course Name' />
                                    </div>
                                    <div className="col col-md-6">
                                        <input type="text" id='coursecode' name='coursecode' className='w-100 py-2 px-3' onChange={handlechange} placeholder='Enter Course Code' />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col">
                                        <textarea name="coursedescription" className='w-100 px-3 py-3' id="coursedescription" cols="30" rows="10" onChange={handlechange} placeholder='Enter your Course Description '></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6  ">
                                        <button className='btn btn-danger w-100 ' onClick={handlesubmit} disabled={isProcessing}>
                                            {!isProcessing ? "Add Course"
                                                : <div className='spinner-border spinner-border-sm'></div>
                                            }
                                        </button>
                                    </div>
                                    <div className="col col-lg-6 ">
                                        <Link to="/dashboard/courses-list" className='btn btn-primary w-100'> See All Courses</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

