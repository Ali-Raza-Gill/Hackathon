import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to={'/dashboard'} class="navbar-brand" href="#" style={{ fontFamily: "serif", marginLeft: "30px", fontSize: "25px" }}>Admin Portal</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        <li class="nav-item ">
                            <Link to={'/dashboard/courses'} class="nav-link active" aria-current="page" href="#">Add Course</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to={'/dashboard/courses-list'} class="nav-link active" aria-current="page" href="#">Course List</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/dashboard/students'} class="nav-link active" aria-current="page" href="#">Students</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/dashboard/attendence'} class="nav-link active" aria-current="page" href="#">Attendence</Link>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
    )
}
