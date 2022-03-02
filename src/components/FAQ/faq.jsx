import React from "react";
import '../FAQ/faq.css';
import circle from '../../assets/circle-fill.svg';
import plus from '../../assets/plus.svg';

const FAQ = () =>{
    return(
        <div className="faq">
            <div className="container">
                <h3>Frequently Asked Questions</h3>
                <p className="sub-heading">We are here to explain everything you might want to know. Lets us help !</p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>What is PostBird ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>How to place an order ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>What is PostBird ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>Can I offer more than one service as a provider ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>How do I choose my preferred services ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                        <div className="list">
                            <div className="text">
                                <img src={circle} alt="circle" />
                                <p>What kind  of services does PostBird offer ?</p>
                            </div>
                            <div className="plus">
                                <img src={plus} alt="plus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;