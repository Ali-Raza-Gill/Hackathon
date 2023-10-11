import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../Config/firebase';
import { doc, deleteDoc, serverTimestamp, setDoc } from "firebase/firestore";

let initialstate = {
    name: "",
    phone: "",
    address: ""
}
export default function Main() {

    const [editStudent, setEditStudent] = useState(initialstate);
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isProcessingUpdate, setIsProcessingUpdate] = useState(false)


    const handlechange = (e) => {
      setEditStudent(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const fetchDocuments = async () => {
        setIsLoading(true)
        let array = []

        const querySnapshot = await getDocs(collection(db, "student"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let data = doc.data()
            array.push(data)
        });
        setDocuments(array)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchDocuments()
    }, [])


    const handleCourseDelete = async (student ) => {
        try {
            await deleteDoc(doc(db, "student", student));
            window.toastify("student is deleted", "error")

            // this code is to change data without refreshing it.
            setDocuments((prevDocuments) =>
                prevDocuments.filter((student) => student.id !== student)
            );
        }
        catch (err) {
            console.error(err)
        }
    }


    const handleUpdate = async () => {
        const student = { ...setEditStudent }
        student.dateCreated = student.dateCreated
        student.dateModified = serverTimestamp()
        // course.modifiedBy = {
        //     email: user.email,   
        //     uid: user.uid
        // }
        setIsProcessingUpdate(true)
        try {
            // 1st args database, 2nd args collection,3rd args data.id ,4th args data
            await setDoc(doc(db, "student", student.id), student, { merge: true })
            window.toastify('student is Updated Successfully', 'success')

            //logic start
            let newDocuments = documents.map((doc) => {
                if (doc.id === student.id)
                    return student
                return doc
            })
            setDocuments(newDocuments)

        }
        catch (err) {
            console.log(err)
            window.toastify('something gone error', 'error')
        }
        setIsProcessingUpdate(false)
    }

    const updateCourseHandler = (c) => {
        console.log("student : ", c);
        setEditStudent(c)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col  col-lg-6 offset-lg-3  my-5 ">
                        <div className="row">
                            <div className="col  ">
                                <h1 className='text-center'>List of All Students</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr. No</th>
                                                <th scope="col">Course Name</th>
                                                <th scope="col">Course Code</th>
                                                <th scope="col">Course Descrip</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documents.map((student, i) => {
                                                return <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{student.name}</td>
                                                    <td>{student.phone}</td>
                                                    <td>{student.address}</td>
                                                    <td>
                                                        <button className='btn btn-info btn-sm me-1' type='button' onClick={() => { updateCourseHandler(student) }} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                        <button className='btn btn-danger btn-sm ' onClick={() => { handleCourseDelete(student.id) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Update Student Data </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" id='coursename' name='name' className='w-100 py-2  px-3' onChange={handlechange} value={editStudent.name} placeholder='Enter Student Name' />
                                </div>
                                <div className="col">
                                    <input type="text" id='coursecode' name='phone' className='w-100 py-2 px-3' onChange={handlechange} value={editStudent.phone} placeholder='Enter phone no' />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                <input type="text" id='address' name='address' className='w-100 py-2 px-3' onChange={handlechange} value={editStudent.address} placeholder='Enter address' />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate} disabled={isProcessingUpdate}>{
                                !isProcessingUpdate ? "Update" :
                                    <div className="spinner-border spinner-border-sm"></div>
                            }</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

