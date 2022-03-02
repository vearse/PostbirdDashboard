import React from 'react'
import '../contact-form/contact-form.css';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <h4>FIND US</h4>
                                <h3>We Are Here</h3>
                                <div className="lagos">
                                    <h5>LAGOS</h5>
                                    <p><strong>Phone :</strong> 09023556684</p>
                                    <p><strong>Email :</strong> postbird@gmail.com</p>
                                    <p><strong>Location :</strong> Oshodi</p>
                                </div>
                                <div className="abuja">
                                    <h5>ABUJA</h5>
                                    <p><strong>Phone :</strong> 09023556684</p>
                                    <p><strong>Email :</strong> postbird@gmail.com</p>
                                    <p><strong>Location :</strong> Jabi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <h4>WE ARE EAGER TO HEAR FROM YOU</h4>
                                <h3>Get in Touch</h3>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col">
                                        <label for="" >First Name</label>
                                        <input type="text" className="form-control mt-3"/>
                                    </div>
                                    <div className="col">
                                        <label for="">Last Name</label>
                                        <input type="text" className="form-control mt-3" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="">Email Address</label>
                                    <input type="text" name="" id="" className="form-control mt-3" />
                                </div>
                                <div className="form-group">
                                    <label for="">Request</label>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                                </div>

                                <input type="button" value="Send message" />
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
