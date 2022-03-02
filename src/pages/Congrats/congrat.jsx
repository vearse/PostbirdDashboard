
import Logo1 from '../../assets/logo.svg'; 
import {Link} from "react-router-dom";
import Success from '../../assets/success.png';

function Congrats (){
    
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
                                <div className='py-3 text-center'>
                                    <img src={Success} alt="success" style={{ width:' 200px'}}/>
                                </div> 
                                <h4 className='text-center mb-2'>Success !</h4> 
                                <p className='mb-2 text-center'>Thank you for submitting your application. Your application is queued for review and we will contact you shortly.</p>
                                <Link to="/"><button type="submit">OK </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    )
   
}

export default Congrats;