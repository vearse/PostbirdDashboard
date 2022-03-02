import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Frame 9.svg';
import Caret from '../../assets/Arrowdown.svg';
import '../header/styles.css'
const Header = () => {
    return(
        <div className="header">
            <header>  
                <nav id="navigation" class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <Link class="navbar-brand" to='/'>
                            <img src={Logo}  alt="logo" className="logo"/>
                        </Link>
                        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon overlay-span"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="toggleMobileMenu">
                            <ul className="navbar-nav ms-auto text-center">
                                <li className="nav-item active">
                                    <Link class="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to='/services'>Our Services</Link>
                                </li>
                                <li className="nav-item flex">
                                    <Link class="nav-link" to="/about">About us</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link class="nav-link" to="/contact">Contact us</Link>
                                </li>
                                <li className="nav-item flex">
                                    <Link class="nav-link" to="#">Partner With Us</Link>
                                    <img src={Caret} alt="caret-down" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false" class="caret-down" onmouseenter="showdropDown()"/>

                                    {/* <div class="dropdown_menu hide-btn" >
                                        <Link class="dropdown-item" href="/company/index.html">About</Link>
                                        <Link class="dropdown-item" href="/contact/index.html">Contact Us</Link>
                                        <Link class="dropdown-item" href="#">Affiliates</Link>
                                        <Link class="dropdown-item" href="/tnc/TnC.html">Terms of Services</Link>
                                        <Link class="dropdown-item" href="/privacy/privacy.html">Privacy Policy</Link>
                                    </div> */}
                                </li>
                                
                            </ul>
                            <div class="navbar-nav ms-auto buttons">
                                <li className="nav-item active">
                                    <button className="login">
                                        <Link to="/login">Log In</Link>
                                    </button>
                                </li>
                                <li className="nav-item active">
                                    <button className="register">
                                        <Link to='/fleet-registration'>Register</Link>
                                    </button>
                                </li>
                            </div>    
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;