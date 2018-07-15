import React, { Component } from 'react';
import Modal from 'react-modal';

import LatestListings from './LatestListings';
import FeaturedListings from './FeaturedListings';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight:'100vh', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scrol
  },
  overlay: {
    zIndex: 10
  }
};

Modal.setAppElement('#root');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedListing: {}
    };
  }

  componentDidMount() {
    this.props.getLatestListings();
    this.props.getFeaturedListings();
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
          <FeaturedListings
            featuredListings={this.props.featuredListings}
            gettingLatestListings={this.props.gettingFeaturedListings}
            onOpenModal={this.openModal}   
          />
          <LatestListings
            latestListings={this.props.latestListings}
            gettingLatestListings={this.props.gettingLatestListings}
            onOpenModal={this.openModal}   
          />
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
            
            <img class="img-fluid mt-3 mb-3" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
            {this.state.selectedListing.priceDetails && 
              <div>
                <p className="mb-0">Pricing Details:</p>
                <p>{this.state.selectedListing.priceDetails}</p>
                <hr/>
              </div>
            }
            <p className=" mb-0">Description:</p>
            <p>{this.state.selectedListing.description}</p>
            <button onClick={this.closeModal} className="btn btn-default btn-lg btn-block">Rent Request</button>
          </Modal>
      </div>
    );
  }
}

export default Home;
