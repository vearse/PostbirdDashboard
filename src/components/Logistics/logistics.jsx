import React from 'react'
import '../Logistics/logistics.css';
import image from '../../assets/Group 1860.png';
const Logistics = () => {
    return (
        <div className="logistics">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="content first-box">
                                <div className="green-box">
                                    <h5>YOU RUN YOUR BUSINESS, WE DELIVER.</h5>
                                    <p>... experience the fastest service</p>
                                </div>
                                <img src={image} alt="delivering item" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content second-box mt-5">
                                <h4 className="mb-5">LOOKING FOR A LOGISTICS SERVICE ?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl suspendisse tristique blandit leo. Laoreet id adipiscing sapien lectus aliquam massa quis egestas rhoncus. Cursus viverra id senectus facilisis amet at fermentum risus, sollicitudin. Et vitae enim commodo, id amet leo suscipit nunc.</p> 

                                <p>Cursus viverra id senectus facilisis amet at fermentum risus, sollicitudin. Et vitae enim commodo, id amet leo suscipit nunc Laoreet id adipiscing sapien lectus aliquam massa quis egestas rhoncus. Cursus viverra id senectus facilisis amet at fermentum risus, sollicitudin. Et vitae enim commodo, id amet leo suscipit nunc. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="text-center mt-5 mb-5 reach">Get in <span>touch</span> and let us know how we can <span>help</span>. Call us at <span>0802 234 5678</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logistics
