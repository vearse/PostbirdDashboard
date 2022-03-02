import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import {Link} from "react-router-dom";

const CREATE_NEW_PASSWORD = () => {
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
                            <form action="#">
                                <h5 className="mb-3">Create new Password</h5>
                                <p className="mb-4">In order to protect your account, make sure your password is at least 8 characters including a number and an uppercase letter.</p>

                                <div className="form-group">
                                    <label for="" className="mb-2">Password</label>
                                    <input type="password" placeholder="************" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Confirm Password</label>
                                    <input type="password" placeholder="************" className="form-control"/>
                                </div>
                                
                                <button>
                                    <Link to="/success">Reset Password</Link>
                                </button>
                            </form>

                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CREATE_NEW_PASSWORD;
