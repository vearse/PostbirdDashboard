import React from 'react';
import '../about-content/about-content.css';
import image from '../../assets/Frame 3884.png';

const ABOUT_CONTENT = () => {
    return (
        <div className="about-content">
            <div className="container-fluid">
                <div className="container">
                    <h4 className="title">ABOUT US</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content left-box">
                                <h3>Our Company Profile</h3>
                                <p>PosBird Logistics Company is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Non enim sed scelerisque lobortis ac pretium. Leo a erat sed duis nulla adipiscing auctor bibendum. Feugiat gravida eget ipsum magna augue morbi diam ac. Amet elementum hendrerit eget nisi, in. Id nisl at non orci, lacinia suscipit feugiat. Pellentesque in morbi dictum ut. Eu habitant aliquam pellentesque pretium. Risus curabitur felis sit nunc tincidunt morbi tristique sodales vehicula.</p>

                                <p>A sed commodo ipsum morbi eros, tempus, eu urna. Amet, magna ultrices massa eleifend pellentesque egestas senectus felis. Eget vitae, elit arcu, nunc sem purus mi. Orci purus blandit cras in cras nulla massa non ultrices. Dictumst bibendum tristique turpis tristique. Lorem ut ut nec facilisi sed amet, donec ac a. Aliquam sed libero lectus risus, massa. Nec sed dignissim arcu ipsum tempus. Amet aenean felis, tincidunt pretium pulvinar quam. Adipiscing massa non sagittis.</p>

                                <button className="mt-3">Our services</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content right-box">
                                    <img src={image} alt="our serivces" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ABOUT_CONTENT;
