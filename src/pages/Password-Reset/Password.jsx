import React from 'react';
import axios from '../../axios';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import {Link} from "react-router-dom";

class RESET_PASSWORD extends React.Component {

    // const RESET_PASSWORD = () => {// }
    render() {
        return (
            <div className="login-page">
                <div className="login-header">
                    <div className="container">
                        <div className="contents">
                            <Link className="navbar-brand" to='/'>
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
                                <form action="#" onSubmit={this.handleSubmit}>
                                    <h5 className="mb-3">Reset Password</h5>
                                    <p className="mb-4">Please enter your email address and we’ll email you instructions to reset your password.</p>
                                    
                                    { this.state.errorMessage && <p  className="alert alert-danger"> { this.state.errorMessage } </p> }
                                    { this.state.successMessage && <p  className="alert alert-success"> { this.state.successMessage } </p> }

                                    <div className="form-group"> 
                                        <label for="" className="mb-2">Email</label>
                                        <input type="email" required name="email" 
                                                placeholder="name@example.com" className="form-control"
                                                onChange={this.handleChange} />
                                    </div>
                                    
                                    <button type="submit">
                                        Continue {/* <Link to="/email-verification">Continue</Link> */}
                                    </button> 
                                </form>
 
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
        persons: [],
        errorMessage: '',
        successMessage: ''
    }
    // const [errorMessage, setErrorMessage] = React.useState(false);
    // componentDidMount() {
    //   axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //       const persons = res.data;
    //       this.setState({ persons });
    //     })
    // }

    handleChange = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const data = {
          email: this.state.email
        }; 
        
        this.setState({successMessage: ''});
        this.setState({errorMessage: ''});

        axios.post(`/forgot/password`, data)
          .then(res => {
            this.setState({successMessage: res.data.message});
          })
          .catch((error) => {
           this.setState({errorMessage: error.response.data.message});
        })
    }
}

export default RESET_PASSWORD;
