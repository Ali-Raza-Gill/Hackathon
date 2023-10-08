import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
export default function Footer() {
    return (
        <>
            <div className="container-fluid my-5">
                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase ">See other books</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className='lihover'>
                                        <Link to="" className="text-white text-decoration-none" ><i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-book fa-fw fa-sm me-2"></i>All books</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Execution of the contract</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Publishing house</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="" className="text-white text-decoration-none">The BookStore</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none">123 Street</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none">05765 NY</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-briefcase fa-fw fa-sm "></i>Send us a book</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Write to us</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-white text-decoration-none"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © {new Date().getFullYear()} Copyright:
                        <Link to="/" class="text-info text-decoration-none" > Raza Developers</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}
