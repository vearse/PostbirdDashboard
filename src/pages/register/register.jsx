import React from 'react';
import { Link } from 'react-router-dom';
import '../register/register.css';
import ticksuccess from '../../assets/tickgreen.svg';
import tick from '../../assets/tick.svg';
// import { useBetween } from 'use-between';

class Register extends React.Component{

    render(){
        return (
            <div className="register_">
                <div className="register-header">
                    <h3><span>Post</span>Bird</h3>
                    <p>Registration</p>
                </div>
                <div>
                    { this.props.state.errorMessage && <p  className="alert alert-danger"> { this.props.state.errorMessage } </p> }
                    { this.props.state.successMessage && <p  className="alert alert-success"> { this.props.state.successMessage } </p> }
                </div>
                <div className="register-form">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="progress-top-bar">
                                        <div className="group1">
                                            <img src={ticksuccess} alt="" />
                                            <p>Personal Info</p>
                                        </div>
                                        <div className="group2">
                                            <img src={tick} alt="" />
                                            <p>Vehicle details</p>
                                        </div>
                                        <div className="group3">
                                            <img src={tick} alt="" />
                                            <p>Documents</p>
                                        </div>
                                    </div> 
                                    <form action="#" onSubmit={this.props.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="">Vehicle Brand</label>
                                            <select required onChange={this.props.handleChange} name="brand" id="">
                                                <option value="">Please Select</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Bmw">BWM</option>
                                            </select>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <select required onChange={this.props.handleChange} name="model" id="">
                                                <option value="">Please Select</option>
                                                <option value="Camry">Camry</option>
                                                <option value="Corolla">Corolla</option>
                                            </select>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="">Year</label>
                                            <select required onChange={this.props.handleChange} name="year" id="">
                                                <option value="">Please Select</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Licence Plate</label>
                                            <input type="text" required  onChange={this.props.handleChange} name="license_plate" maxLength="10" placeholder="43A 435 F4" />
                                        </div>
                                        <div className="form-group"> 
                                            <label htmlFor="">Color</label>
                                            <select required onChange={this.props.handleChange} name="color" id="">
                                                <option value="">Please Select</option>
                                                <option value="White">White</option>
                                                <option value="Grey">Grey</option>
                                                <option value="Blue">Blue</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Booking type</label>
                                            <select required onChange={this.props.handleChange} name="booking_type" id="">
                                                <option value="">Please Select</option>
                                                <option value="Taxi 7 seats">Taxi 7 seats</option>
                                                <option value="Taxi 4 seats">Taxi 4 seats</option>
                                            </select>
                                        </div>
                                        <div className="row"> 
                                            <div className="col-md-12">
                                                <button type="submit">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   

}

export default Register;

