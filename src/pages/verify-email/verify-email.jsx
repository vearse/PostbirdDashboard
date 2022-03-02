import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import message from '../../assets/New message.svg';
import {Link} from "react-router-dom";

const VERIFY_EMAIL = () => {
    return (
        <div className="login-page">
            <div className="login-header">
                <div className="container">
                    <div className="contents">
                        <Link class="navbar-brand" to='/'>
                            <img src={Logo1} alt="logo" className="logo"/>
                        </Link>
                        <p>Reset Password</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-8">
                        <div className="form-content">
                            <h5 className="mb-3">Email Verification</h5>
                            <p className="mb-4">We have sent you a reset password link to your registered email address</p>
                            <div className="image-box text-center">
                                <img src={message} alt="" />
                            </div>
                            <button>
                                <Link to="/create-password">Continue</Link>
                            </button>
                            <div className="tnc justify-content-center">
                                <p className="text-center">Didn't recieve the link?
                                     <span> 
                                         <Link to='/fleet-registration'> Resend</Link>
                                    </span>
                                </p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VERIFY_EMAIL;
