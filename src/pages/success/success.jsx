import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import success from '../../assets/clarity.svg';
import {Link} from "react-router-dom";

const SUCCESS = () => {
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
                        <div className="form-content text-center">
                            <div className="image-box">
                                <img src={success} alt="" className="success" />
                            </div>
                            <h5 className="mb-3">Congratulations!</h5>
                            <p className="mb-4">You have successfully reset your password, kindly log in to your account</p>
                            <button>
                                <Link to="/login">Login</Link>
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SUCCESS;
