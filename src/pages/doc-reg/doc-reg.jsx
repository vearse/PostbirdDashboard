import React from 'react';
import '../register/register.css';
import ticksuccess from '../../assets/tickgreen.svg';
import tick from '../../assets/tick.svg';


class DOCUMENT_REGISTRATION extends React.Component {

    banks = [
        {'id': '1','name' :'Access Bank','code':'044'},
        {'id': '2','name' :'Citibank','code':'023'},
        {'id': '3','name' :'Diamond Bank','code':'063'},
        {'id': '4','name' :'Dynamic Standard Bank','code':'000'},
        {'id': '5','name' :'Ecobank Nigeria','code':'050'},
        {'id': '6','name' :'Fidelity Bank Nigeria','code':'070'},
        {'id': '7','name' :'First Bank of Nigeria','code':'011'},
        {'id': '8','name' :'First City Monument Bank','code':'214'},
        {'id': '9','name' :'Guaranty Trust Bank','code':'058'},
        {'id': '10','name': 'Heritage Bank Plc','code':'030'},
        {'id': '11','name': 'Jaiz Bank','code':'301'},
        {'id': '12','name': 'Keystone Bank Limited','code':'082'},
        {'id': '13','name': 'Providus Bank Plc','code':'101'},
        {'id': '14','name': 'Polaris Bank','code':'076'},
        {'id': '15','name': 'Stanbic IBTC Bank Nigeria Limited','code':'221'},
        {'id': '16','name': 'Standard Chartered Bank','code':'068'},
        {'id': '17','name': 'Sterling Bank','code':'232'},
        {'id': '18','name': 'Suntrust Bank Nigeria Limited','code':'100'},
        {'id': '19','name': 'Union Bank of Nigeria','code':'032'},
        {'id': '20','name': 'United Bank for Africa','code':'033'},
        {'id': '21','name': 'Unity Bank Plc','code':'215'},
        {'id': '22','name': 'Wema Bank','code':'035'},
        {'id': '23','name': 'Zenith Bank','code':'057'}
    ];


    render(){ 
        return (
            <div className="register_">
                <div className="register-header">
                    <h3><span>Post</span>Bird</h3>
                    <p>Registration</p>
                </div>
                <div className="register-form">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="progress-top-bar">
                                        <div className="group1">
                                            <img src={ticksuccess} alt="" />
                                            <p>Personal Info</p>
                                        </div>
                                        <div className="group2">
                                            <img src={ticksuccess} alt="" />
                                            <p>Vehicle details</p>
                                        </div>
                                        <div className="group3">
                                            <img src={tick} alt="" />
                                            <p>Documents</p>
                                        </div>
                                    </div>
                                    
                                    <form  action="#" onSubmit={this.props.handleSubmit}>
                                        { this.props.state.errorMessage && <p  className="alert alert-danger"> { this.props.state.errorMessage } </p> }
                                        { this.props.state.successMessage && <p  className="alert alert-success"> { this.props.state.successMessage } </p> }
                                        <div className="documents ">
                                            <h4>Account Details</h4>
                                            <div className="form-group col-md-9 col-sm-12 ">
                                                {/* <label htmlFor="" className="mb-2 mt-2">Bank</label> */}
                                                <select name="bank" required onChange={this.props.handleChange} id="" className="form-control mb-2">
                                                    <option value="">Please Select Bank</option>
                                                    {
                                                        this.banks.map((bank, key) => {
                                                            return   <option key={bank.code} value={bank.name}>{bank.name}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-9 col-sm-12 ">
                                                {/* <label htmlFor="" className="mb-2">Password</label> */}
                                                <input type="number" required onChange={this.props.handleChange} name="account"
                                                       min={10} max={10}  placeholder="Account Number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="documents">
                                            <h4>Driver’s profile photo</h4>
                                            <p>Your profile photo helps people recognize you. Please face the camera directly with your eyes open and mouth visible</p>
                                            
                                            <div className="text-right"> 
                                                <input type="file" required name="photo"  accept="image/*"  id="" onChange={this.props.handleFile} className="custom-file-input" />
                                               {this.props.state.photo  && <p className='small mr-4 text-success file-ready'> File Ready</p>}
                                            </div>
                                        </div>
                                        <div className="documents">
                                            <h4>Driver’s Licence</h4>
                                            <p>Expiry date</p>
                                            <div className="col-8">
                                                 <input  type="date" name="expiration_date" required className='form-control'onChange={this.props.handleChange}  id="" />
                                            </div>
                                            <div className="text-right">
                                                <input type="file" required name="identification" id="" onChange={this.props.handleFile} className="custom-file-input" />
                                                 {this.props.state.identification  && <p className='small mr-4 text-success file-ready'> File Ready</p>}
                                            </div>
                                        </div> 
                                        <div className="documents"> 
                                            <h4>Identification card</h4>
                                            <p>Take a photo of your identification card and make sure all four corners are visible.</p>
                                            <div className="text-right">
                                                <input type="file" required name="license" id=""  onChange={this.props.handleFile} className="custom-file-input" />
                                                {this.props.state.license  && <p className='small mr-4 text-success file-ready'> File Ready</p>}
                                            </div>
                                        </div>
                                            
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
   }
}

export default DOCUMENT_REGISTRATION;
