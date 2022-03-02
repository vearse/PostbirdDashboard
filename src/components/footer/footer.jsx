import React from 'react';
import '../footer/footer.css';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/logo.svg';
import fb from '../../assets/Group 175.svg';
import ig from '../../assets/Group 176.svg';
import linkedin from '../../assets/Group 178.svg';
import twitter from '../../assets/Group 179.svg';
import help from '../../assets/Vector1.svg';
import email from '../../assets/Email.svg';
import call from '../../assets/call.svg';
import location from '../../assets/location.svg';
import app1 from "../../assets/Group 108.svg";
import app2 from "../../assets/Group 26.svg";
import cc from '../../assets/cc.svg';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="container line">
                    <div className="footer-list">
                        <div className="footer-item about_">
                            <img src={Logo1} alt="logo" />
                            <p>We support business operations and deliver a superior customer experience by bringing the business closer to customer. </p>

                            <div className="socials">
                                <img src={fb} alt="fb" />
                                <img src={ig} alt="ig" />
                                <img src={linkedin} alt="linkedin" />
                                <img src={twitter} alt="twitter" />
                            </div>

                            <div className="app-icons">
                                <img src={app1} alt="" />
                                <img src={app2} alt="" />
                            </div>
                        </div>
                        <div className="footer-item center">
                            <h4>ACCOUNT</h4>
                            <p>
                                <Link to='/login'>Log in</Link>
                            </p>
                            <p>
                            <Link to='/register'>Register</Link>
                            </p>
                        </div>
                        <div className="footer-item">
                            <h4>QUICK LINKS</h4>
                            <p>
                                <Link to='/about'>About us</Link>
                            </p>
                            <p>Privacy Policy</p>
                            <p>FAQ</p>
                        </div>
                        <div className="footer-item">
                            <h4>CONTACTS</h4>
                            <span>
                                <img src={help} alt="" />
                                <p>
                                    <Link to='/contact'>Help - center</Link>
                                </p>
                            </span>
                            <span>
                                <img src={email} alt="" />
                                <p>support@postbird.com</p>
                            </span>
                            <span>
                                <img src={call} alt="" />
                                <p>+234 999 9999</p>
                            </span>
                            <span>
                                <img src={location} alt="" />
                                <p>19, Akarigbere, off idejo street, Lagos.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <img src={cc} alt="" />
                    <p>copyright2021@postbird</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;