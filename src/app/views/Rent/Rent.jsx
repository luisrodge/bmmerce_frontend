import React, { Component } from 'react';
import Modal from 'react-modal';
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
          {this.props.listings.map((listing) =>
            <div className="col-md-3 mb-5">
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

          <img class="img-fluid mt-3 mb-3" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap" />
          {this.state.selectedListing.priceDetails &&
            <div>
              <p className="mb-0">Pricing Details:</p>
              <p>{this.state.selectedListing.priceDetails}</p>
              <hr />
            </div>
          }
          <p className=" mb-0">Description:</p>
          <p>{this.state.selectedListing.description}</p>
          <button onClick={this.closeModal} className="btn btn-light btn-lg btn-block">Rent Request</button>
        </Modal>
      </div>
    );
  }
}

export default Rent;
