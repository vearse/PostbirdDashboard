import React from 'react';
import '../rides/rides.css';
import image1 from '../../assets/Ellipse 86.png';
import image2 from '../../assets/Ellipse 88.png';
import image3 from '../../assets/Ellipse 89.png';
import image4 from '../../assets/Ellipse 90.png';
import image5 from '../../assets/Ellipse 87.png';

const Rides = () => {
    return(
        <div className="rides">
            <div className="container">
                <h3>Why Riders <span>choose</span> PostBird</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="content_">
                            <span>
                                <p>Easy Registration </p>
                            </span>
                            <span>
                                <p>Choose your own working hours </p>
                            </span>
                            <span>
                                <p>Work at your own pace  </p>
                            </span>
                            <span>
                                <p>No middleman  </p>
                            </span>
                            <span>
                                <p>Organizational alignment   </p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content_">
                            <div className="center-img">
                                <img src={image1} alt="" />
                            </div>
                            <img src={image2} alt="" className ="image1"/>
                            <img src={image3} alt="" className ="image2"/>
                            <img src={image4} alt="" className ="image3"/>
                            <img src={image5} alt="" className ="image4"/>

                        </div>    
                    </div>
                </div>
                <div className="btn-wrap">
                    <button>Become a rider</button>
                </div>
            </div>
        </div>
    )
}

export default Rides;