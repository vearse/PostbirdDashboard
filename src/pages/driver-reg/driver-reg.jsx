import React, { useState } from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import rectangle from '../../assets/Rectangle 647.svg';
import {Link, useHistory} from "react-router-dom";
import RegisterationState from '../../registeration-state';
import Register from '../register/register';
import DOCUMENT_REGISTRATION from '../doc-reg/doc-reg';
import axios from '../../axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Congrats from '../Congrats/congrat';

class Personal extends React.Component{
    render(){
        return (
            <div className="login-page" id="">
                    <div className="login-header">
                        <div className="container">
                            <div className="contents">
                                <Link className="navbar-brand" to='/'>
                                    <img src={Logo1} alt="logo" className="logo"/>
                                </Link>
                                <p>LOG IN</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-8">
                                <div className="form-content">
                                    <form action="#" id="personal" onSubmit={this.props.handleSubmit}>
                                        <h5>Register as a driver</h5> 
                                        <p>If you own a fleet of vechicles or multiple bikes, you can   
                                            <Link to='/fleet-registration'>as a fleet owner sign up here.</Link>
                                        </p>
    
                                        { this.props.state.errorMessage && <p  className="alert alert-danger"> { this.props.state.errorMessage } </p> }
                                        { this.props.state.successMessage && <p  className="alert alert-success"> { this.props.state.successMessage } </p> }

                                        <div className="form-group">
                                            <label htmlFor="" className="mb-2">Email</label>
                                            <input type="email" required onChange={this.props.handleChange} name="email" placeholder="name@example.com" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="mb-2">Full Name</label>
                                            <input type="text" required onChange={this.props.handleChange} name="name" placeholder="John Joe" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="mb-2">Password</label>
                                            <input type="password" name="password" required onChange={this.props.handleChange} min="6" placeholder="**********" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="mb-0">Phone number</label>
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                defaultCountry="NG"  required value={this.props.state.mobile}
                                                country="NG" international countryCallingCodeEditable={false}  
                                                onChange={this.props.handlePhone}  />
                                            {/* <PhoneNumber phone={this.props.mobile} /> */}
                                            {/* <input type="text" required onChange={this.props.handleChange} name="mobile" minLength="11" maxLength="11" placeholder="" className="form-control"/> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="mb-2 mt-2">City</label>
                                            <select name="city" onChange={this.props.handleChange} id="" className="form-control mb-2">
                                                <option value="lagos">Lagos</option>
                                                <option value="abuja">Abuja</option>
                                            </select>
                                        </div>
                                        <button type="submit" >
                                            Continue
                                        </button>
                                    </form>
    
                                    <p className="text-center">Have an account?  <Link to="/login"><span>Log in</span></Link></p>
                                    <div className="tnc">
                                        {/* <img src={rectangle} alt="" /> */}
                                        <p>By creating an account, you agree to the <span>Terms and Conditions and Privacy Policy</span></p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
 
 
class DRIVER_REG extends React.Component{
    render(){ 
        return (
            <div> 
               { this.state.personal && <Personal handleChange={this.handleChange} handlePhone={this.handlePhone}
                        state={this.state} handleSubmit = {this.handlePersonal}/> }  

               { this.state.vehicle && <Register handleChange={this.handleChange} state={this.state} handleSubmit = {this.handleVehicle}/>  }

               { this.state.documents && <DOCUMENT_REGISTRATION  handleChange={this.handleChange} state={this.state} 
                      handleFile = {this.handleFile}  handleSubmit = {this.handleSubmitForm}/>  }

              { this.state.congrats && <Congrats />}
            </div>
            
        )
    }

    state = RegisterationState

    handlePhone = e => {
        this.setState({'mobile' : e })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name] : value }) 
    }

    handleFile = (e) => { 
        // console.log( e.target.name , e.target.files[0] );
        this.setState({ [e.target.name] : e.target.files[0] })
        
    }
 
    handlePersonal = e => { 
        e.preventDefault();
        axios.post('/validate/register', this.state)
        .then((res)=>{
            this.setState({successMessage: res.data.message});
            this.setState({ vehicle : 1 })
            this.setState({ personal: 0 });
            // this.props.history.push('/login');
        }).catch((err)=> { 
            this.setState({errorMessage: err.response.data.message});
        });
    }

    handleVehicle = e => {
        e.preventDefault();
        this.setState({ vehicle : 0 })
        this.setState({ documents: 1 });
    }
    
    
    handleSubmitForm = e => {
        e.preventDefault();
        this.setState({successMessage: ''});
        this.setState({errorMessage: ''}); 
        console.log(this.state); 
        let data = new FormData(); 
        Object.entries(this.state).forEach( 
            ([key, value]) => { data.append(key, value) }
        );

        axios.post('/driver/register', data)
        .then((res)=>{
            // this.setState({successMessage: res.data.message});
            this.setState({ documents : 0 })
            this.setState({ congrats: 1 });
            // this.props.history.push('/login');
        }).catch((err)=> { 
            // console.log(err.response)
            this.setState({errorMessage: err.response.data.message});
        });
    }
}

export default DRIVER_REG;

