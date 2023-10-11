import React, { useState } from 'react'
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../Config/firebase';
import { Link } from 'react-router-dom';


let initialstate = {
  name: "",
  phone: "",
  address: ""
}
export default function Students() {

  const [state, setState] = useState(initialstate);
  const [isProcessing, setIsProcessing] = useState(false)

  const handlechange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    let { name, phone, address } = state
    name = name.trim();
    phone = phone.trim();
    address = address.trim();
    if (name.length < 3) {

      return window.toastify('Enter more then 3 letters in Name', 'error')
    }
    if (phone.length < 11) {
      return window.toastify("Enter correct phone number", "error")
    }
    if (address.length < 10) {
      return window.toastify("Enter your Address Correctly", "error")
    }
    let student = { name, phone, address }
    student.dateCreated = serverTimestamp()
    student.id = Math.random().toString(36).slice(2)
    createDocument(student)
    console.log(state)
  }

  const createDocument = async (student) => {
    try {
      // Assuming you have 'db' imported from Firebase somewhere in your code.
      await setDoc(doc(db, 'student', student.id), student);
      window.toastify('student is added successfully', 'success');
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
                <h1 className='text-center mb-4'>Add Student</h1>
              </div>
            </div>
            <div className="card p-lg-4 p-md-3 p-sm-2 shadow" style={{ backgroundColor: "#F1FAEE" }}  >
              <div className="form "  >
                <div className="row mb-4">
                  <div className="col ">
                    <input type="text" id='studentname' name='name' className='w-100 py-2  px-3' onChange={handlechange} placeholder='Enter Student Name' />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-4">
                    <input type="tel" id='studentphone' name='phone' className='w-100 py-2 px-3' onChange={handlechange} placeholder='Enter Phone Number' />
                  </div>
                </div>

                <div className="row mt-2 mb-4">
                  <div className="col ">
                    <input type='text' id='address' name="address" className='w-100 py-2 px-3' onChange={handlechange} placeholder='Enter your Address ' />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-4 ">
                    <button className='btn btn-success w-100 ' onClick={handlesubmit} disabled={isProcessing}>
                      {!isProcessing ? "Add student"
                        : <div className='spinner-border spinner-border-sm'></div>
                      }
                    </button>
                  </div>
                  <div className="col mt-4">
                    <Link to='/dashboard/' className='btn btn-dark w-100 text-white'>Student List</Link>
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

