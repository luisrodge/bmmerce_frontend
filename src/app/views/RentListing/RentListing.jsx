import React, { Component } from 'react';

class RentListing extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
            <h4>Rent Subaru model 2009</h4>
            <div className="notice">
                <p>We will get back to you either through whatsapp or phone call in about 1 hour.</p>
            </div>
            <br/>
            <form action="">
                <div className="form-group">
                    <label htmlFor="title">You Name</label>
                    <input type="text" name="title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Contact Number</label>
                    <input type="text" name="price" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">When Would You Like To Rent This Listing?</label>
                    <input type="date" name="address" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Additional Comments/Details</label>
                    <textarea name="description" className="form-control"></textarea>
                </div>
                <br/>
                <button className="btn btn-light btn-block">Send Rent Request</button>
            </form>
        </div>
        <div className="col-md-4 ml-auto">
            <img src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="" className="img-fluid"/>
        </div>
      </div>
    );
  }
}

export default RentListing;
