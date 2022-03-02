import React, { useState } from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import rectangle from '../../assets/Rectangle 647.svg';
import {Link} from "react-router-dom";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import Register from '../register/register';
import DOCUMENT_REGISTRATION from '../doc-reg/doc-reg';
import Congrats from '../Congrats/congrat';
import RegisterationState from '../../registeration-state';
import axios from '../../axios';

class Fleet extends React.Component{
    render(){
        return (
            <div className="login-page">
                <div className="login-header">
                    <div className="container">
                        <div className="contents">
                            <Link class="navbar-brand" to='/'>
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
                                <form action="#" onSubmit={this.props.handleSubmit}>
                                    <h5>Fleet Owners</h5>
                                    <p>If you own a fleet of vechicles or multiple bikes, you can as a fleet owner sign up here.</p>
                                    <p><Link to='/driver-registration'>Sign up here,</Link> if you are an individual driver.</p>
    
    
                                    { this.props.state.errorMessage && <p  className="alert alert-danger"> { this.props.state.errorMessage } </p> }
                                    { this.props.state.successMessage && <p  className="alert alert-success"> { this.props.state.successMessage } </p> }

                                    <div className="form-group">
                                        <label for="" className="mb-2">Email</label>
                                        <input required onChange={this.props.handleChange} name='email'  type="text" placeholder="name@example.com" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="mb-2">Full Name</label>
                                        <input required onChange={this.props.handleChange} name='name' type="text" placeholder="John Joe" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="mb-2">Password</label>
                                        <input type="password" name="password" required onChange={this.props.handleChange} min="6"  placeholder="**********" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="mb-2">Phone number</label>
                                        <PhoneInput
                                                placeholder="Enter phone number"
                                                defaultCountry="NG"  required value={this.props.state.mobile}
                                                country="NG" international countryCallingCodeEditable={false}  
                                                onChange={this.props.handlePhone}  />
                                    </div> 
                                    <div className="form-group">
                                        <label for="" className="mb-2">Vechicles in your fleet</label>
                                        <select required onChange={this.props.handleChange}  name="fleet_vehicle" id="" className="form-control">
                                            <option value="">Please Select</option>
                                            <option value="1-5">1-5</option>
                                            <option value="1-5">6-10</option>
                                            <option value="1-5">11-20</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="" className="mb-2 mt-2">City</label>
                                        <select name="city" onChange={this.props.handleChange}  className="form-control mb-2">
                                            <option value="lagos">Lagos</option>
                                            <option value="lagos">Abuja</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" >
                                        Continue
                                    </button>
                                </form>
    
                                <p className="text-center">Have an account?  <Link to="/login"><span>Log in</span></Link></p>
                                <div className="tnc">
                                    <img src={rectangle} alt="" />
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

class FLEET_REGISTRATION extends  React.Component{
    render(){ 
        return (
            <div> 
               { this.state.personal && <Fleet handleChange={this.handleChange} handlePhone={this.handlePhone}
                        state={this.state} handleSubmit = {this.handlePersonal}/> }  

               { this.state.vehicle && <Register handleChange={this.handleChange} state={this.state} handleSubmit = {this.handleVehicle}/>  }

               { this.state.documents && <DOCUMENT_REGISTRATION  handleChange={this.handleChange} state={this.state} 
                      handleFile = {this.handleFile}  handleSubmit = {this.handleSubmitForm}/>  }

              { this.state.congrats && <Congrats />}
            </div>
            
        )
    }

    componentDidMount(){
        this.setState({'isfleet' : 1 });
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
            this.setState({ errorMessage: '' });
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

export default FLEET_REGISTRATION;
