import React from 'react';
import '../vision/vision.css';
import vision from '../../assets/Rectangle 645.png';
import vision2 from '../../assets/Rectangle 646.png';

const Vision = () => {
    return (
        <div className="vision">
            <div className="container-fluid">
                <div className="container">
                    <h3>Vision and Mission</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="images">
                                    <img src={vision} alt="vision of postbird" className="big_img" />
                                    <img src={vision2} alt="mission of postbird" className="sm_img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="vision_">
                                    <h4>Our Vision</h4>
                                    <p>To be the leading logistics lorem ipsum dolor sit amet, consectetur adipiscing elit. Inter sit amet, consectetur Inter sit amet, consectetur  </p>
                                </div>
                                <div className="mission">
                                    <h4>Our Mission</h4>
                                    <p>To deliver a reliable logistics  solutions that will lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                                </div>
                                <div className="values">
                                    <h4>Our Core Values</h4>
                                    <p>Our <strong>Core Values</strong> include :  Professionalism, Integrity, Reliability, Consistency and Customer Satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision;
