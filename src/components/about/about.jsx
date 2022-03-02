import React from "react";
import '../about/about.css';
import aboout1 from '../../assets/Group 186.svg';
import aboout2 from '../../assets/Vector.svg';
import aboout3 from '../../assets/now.svg';

const About = () => {
    return(
        <div className="about">
            <div className="container">
                <h3>Our Advantages</h3>
                <div className="row advantage">
                    <div className="col-md-6">
                        <div className="content">
                            <img src={aboout1} alt="" />
                            <div className="heading">
                                <h3><span>01</span> Benefits for partners</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter sit amet, consectetur Inter sit amet.</p>
                            </div>
                        </div>
                        <div className="content">
                            <img src={aboout2} alt="" />
                            <div className="heading">
                                <h3><span>02</span> Customer satisfactions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter sit amet, consectetur Inter sit amet.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="content">
                            <img src={aboout3} alt="" />
                            <div className="heading">
                                <h3><span>03</span> Seamless services</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter sit amet, consectetur Inter sit amet.</p>
                            </div>
                        </div>
                        <div className="content">
                            <img src={aboout3} alt="" />
                            <div className="heading">
                                <h3><span>04</span> Seamless services</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter sit amet, consectetur Inter sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="how-to-get-started">
                        <h3>How do i get started ?</h3>
                        <p>We’re here to help you get things rolling.</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default About;