import React, { Component } from 'react';

class NewListing extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 mx-auto">
            <h4 className="text-center">Add A New Rental Listing</h4>
            <br/>
            <form action="">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Price</label>
                    <input type="text" name="price" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Address</label>
                    <input type="text" name="address" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price-details">Additional Pricing Details</label>
                    <textarea name="price-details" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="images">Images</label><br/>
                    <input type="file" name="images"/>
                </div>
                <br/>
                <button className="btn btn-light btn-block">Create Listing</button>
            </form>
        </div>
      </div>
    );
  }
}

export default NewListing;
