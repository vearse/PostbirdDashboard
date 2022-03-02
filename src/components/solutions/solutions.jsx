import React from 'react';
import location from '../../assets/location 1.png';
import Location from '../../assets/Location 1.svg';
import Login1 from '../../assets/LOgin 1.png';
import Login from '../../assets/Login.svg';
import shipment from '../../assets/Shipment 1.png';
import shipment1 from '../../assets/shipment.svg';
import track from '../../assets/track 2.png';
import track1 from '../../assets/track.svg';
import '../solutions/solution.css';

const Solution = () => {
    return(
        <div className="solution">
            <div className="main-solution-wrapper">
                <div className="container-fluid">
                    <div className="container">
                        <div className="main_content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="wrapper">
                                        <img src={Login1} alt=""  className="left"/>
                                        <div className="text">
                                            <img src={Login} alt="" className="icon"/>
                                            <h4>Login and set up your account </h4>
                                            <p>Log in to the app using your name, mobile number and email address.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wrapper location-mockup">
                                        <img src={location} alt="" className="right"/>
                                        <div className="text">
                                            <img src={Location} alt="" className="location" />
                                            <h4>Set up pick-up & drop off location </h4>
                                            <p>The pic-up address will automatically be filled in for you depending on GPS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>     
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="wrapper">
                                        <img width="500px" src={shipment} alt="" className="left"/>
                                        <div className="text">
                                            <img src={shipment1} alt="" className="shipper"/>
                                            <h4>Select your item type </h4>
                                            <p>With PostBird, you can select the type item you want to transfer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wrapper">
                                        <img src={track} alt="" className="right"/>
                                        <div className="text">
                                            <img src={track1} alt="" className="icon"/>
                                            <h4>Track your order </h4>
                                            <p>Track the delivery or arrival of your service with real time GPS.</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Solution;