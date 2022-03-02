import React from "react";
import '../services/services.css';
import truck1 from '../../assets/Group 158.svg';
import truck2 from '../../assets/Group 159.svg';
import truck3 from '../../assets/Group 160.svg';

const Services = () => {
    return(
        <div className="services">
            <div className="container">
                <h3>We bring <span>strategy</span> to your business</h3>
                <p className="main-text">We are a Logistics Company Based in Lagos. We support business operations and deliver a superior customer experience by bringing the business closer to customer. We provide tailored errand - running and domestic services to both individuals and organizations within inter and intra states. Among the <span>services</span> we provide include : </p>

                <div className="row">
                    <div className="col-md-4">
                        <div className="content">
                            <img src={truck1} alt="" />
                            <h5>Courier service</h5>
                            <p>We provide end-to-end logistics solutions to business within Nigeria. Your light & heavy weighted packages are picked up and delivered by us safely and promply.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content">
                            <img src={truck2} alt="" />
                            <h5>Logistic solution</h5>
                            <p>We provide end-to-end logistics solutions to business within Nigeria. Your light & heavy weighted packages are picked up and delivered by us safely and promply.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content">
                            <img src={truck3} alt="" />
                            <h5>E-commerce deliveries </h5>
                            <p>We provide end-to-end logistics solutions to business within Nigeria. Your light & heavy weighted packages are picked up and delivered by us safely and promply.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Services;