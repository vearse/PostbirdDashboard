import React from "react";
import '../hero/styles.css';
import app1 from "../../assets/Group 108.svg";
import app2 from "../../assets/Group 26.svg";
import heroimage from "../../assets/Group 146.svg";

const Hero = () =>{
  return(
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1 className="">
                The best solution for your <span>logistics</span> needs. Anytime ! <br></br> Anywhere !
              </h1>
              <p>We ensure on-time delivery and efficient customer services
              by bringing your goods in the fastest way with flexible pricing.</p>

              <div className="download">
                <div className="app-icons">
                  <img src={app1} alt="" />
                  <img src={app2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <img src={heroimage} alt="" className="hero-img" />
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Hero;