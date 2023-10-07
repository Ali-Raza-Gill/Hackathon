import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to={'/'} class="navbar-brand" href="#" style={{ fontFamily: "serif", marginLeft: "30px", fontSize: "25px" }}>Todo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'contact'} class="nav-link active" aria-current="page" href="#">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'about'} class="nav-link active" aria-current="page" href="#">About</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col">
                            <Link to='auth/register' className='btn ' style={{ backgroundColor: "black", color: "white", borderRadius: "2px" }}>Sign Up</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mx-3">
                            <Link to='auth/login' className='btn ' style={{ backgroundColor: "black", color: "white", borderRadius: "2px" }}>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
