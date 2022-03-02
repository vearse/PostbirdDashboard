import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import {Link} from "react-router-dom";
import axios from '../../axios';
import auth from '../../auth.js';
import config from '../../config';

class Login extends React.Component {
    
    render(){ 
        return (
            <div className="login-page">
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
                                <form action="#"  onSubmit={this.handleSubmit}>
                                    <h5 className="mb-3">Log in to manage your account</h5>
                                    <p className="mb-4">Hello welcome back to your account.</p>

                                    { this.state.errorMessage && <p  className="alert alert-danger"> { this.state.errorMessage } </p> }
                                    { this.state.successMessage && <p  className="alert alert-success"> { this.state.successMessage } </p> }

                                    <div className="form-group">
                                        <label for="" className="mb-2">Email</label>
                                        <input type="email"  required name="email" onChange={this.handleChange}
                                            placeholder="name@example.com" value={this.state.email} className="form-control"/>
                                    </div>
                                    <div className="form-group"> 
                                        <label for="" className="mb-2">Password</label>
                                        <input type="password"  required name="password"  onChange={this.handleChange}
                                            placeholder="**********" value={this.state.password} className="form-control"/>
                                    </div> 
                                    <button type="submit">Login</button>
                                </form>
    
                                <p className="text-center"> <span><Link to="/reset-password">Forgot Password?</Link> </span></p>
                                <div className="tnc justify-content-center">
                                    <p className="text-center">Don't have an account?
                                         <span> 
                                             <Link to='/fleet-registration'> Register here</Link>
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

    state = {
        email: '',  
        password: '',
        errorMessage: '',
        successMessage: ''
    }
 
    componentDidMount() {
        // const token = getToken;

        // console.log(token);
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name] : value })
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const data = {
          email: this.state.email,
          password: this.state.password
        }; 

        this.setState({successMessage: ''});
        this.setState({errorMessage: ''});
 
        axios.post(`/login/dashboard`, data)
          .then(res => { 
            auth.login(res.data);
            this.setState({successMessage: res.data.message});
            window.location.href = config.dashboardURL;
          }) 
          .catch((error) => {
            // console.log(error.response)
            this.setState({errorMessage: error.response.data.message});
            setTimeout(() => { this.setState({errorMessage: ''}); }, 3000)
        })
    }

}

export default Login;
