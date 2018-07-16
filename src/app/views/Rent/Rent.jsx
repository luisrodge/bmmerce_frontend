import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { Listing } from '../../common'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100vh', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scrol
  },
  overlay: {
    zIndex: 10
  }
};

Modal.setAppElement('#root');

class Rent extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedListing: {}
    };
  }

  componentDidMount() {
    this.props.getListings();
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedListing: {}
    });
  }

  openModal = (listing) => {
    this.setState({
      modalIsOpen: true,
      selectedListing: listing
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="pb-3">Browse Listings To Rent</h4>
          </div>
        </div>
        <div className="row">
          {this.props.listings.map((listing, index) =>
            <div className="col-md-3 mb-5" key={index}>
              <Listing
                listing={listing}
                onOpenModal={this.openModal}
              />
            </div>
          )}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          contentLabel="Listing View"
        >
          <div className="row">
            <div className="col-md-6">
              <h4 className="m-0">{this.state.selectedListing.title}</h4>
              <p className="text-muted">{this.state.selectedListing.address}</p>
            </div>
            <div className="col-md-6 text-right">
              <h5 className="text-success m-0">${this.state.selectedListing.price}</h5>
              <p className="text-muted">Listed by Cayo Rentals</p>
            </div>
          </div>
          <Link to={{pathname: `/${this.state.selectedListing.id}/rent`, state: {listing: this.state.selectedListing}}} className="btn btn-light btn-lg btn-block mt-3 mb-4">
            Send Rent Request
          </Link>
          {this.state.selectedListing.priceDetails &&
            <div>
              <h5 className="mb-1">Pricing Details:</h5>
              <p>{this.state.selectedListing.priceDetails}</p>
              <hr />
            </div>
          }
         <h5 className=" mb-1">Other Information:</h5>
          <p>{this.state.selectedListing.description}</p>
          <img class="img-fluid mt-3 mb-3" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap" />
        </Modal>
      </div>
    );
  }
}

export default Rent;
