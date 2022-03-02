import React from 'react';
import '../CTA/cta.css';
import mockup from '../../assets/La 1.png';
import app1 from "../../assets/Group 108.svg";
import app2 from "../../assets/Group 26.svg";

const CTA = () => {
    return(
        <div className="cta">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mockup">
                        <img src={mockup}  alt="logo"/>
                    </div>
                    <div className="col-lg-6 text">
                        <h3 >Have you got the <br></br>postbird app?</h3>
                        <p>Get the best logistics services in Nigeria</p>
                        <div className="app-icons">
                            <img src={app1} alt="" />
                            <img src={app2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;