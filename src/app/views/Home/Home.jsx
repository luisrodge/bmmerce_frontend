import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import LatestListings from './LatestListings';
import FeaturedListings from './FeaturedListings';
import { Slider } from '../../common';

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
    console.log("sdsds", listing);
    this.setState({
      selectedListing: listing,
      modalIsOpen: true,
    });
  }

  render() {
    return (
      <div>
        <FeaturedListings
          featuredListings={this.props.featuredListings}
          gettingFeaturedListings={this.props.gettingFeaturedListings}
          onOpenModal={this.openModal}
        />
        <LatestListings
          latestListings={this.props.latestListings}
          gettingLatestListings={this.props.gettingLatestListings}
          onOpenModal={this.openModal}
        />

        {this.state.modalIsOpen &&
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            contentLabel="Listing View"
            ariaHideApp={true}
          >
            <div className="row">
              <div className="col-md-8">
                <h4 className="m-0">{this.state.selectedListing.title}</h4>
                <p className="text-muted">{this.state.selectedListing.address}</p>
              </div>
              <div className="col-md-4 text-right">
                <h4 className="text-success m-0">${this.state.selectedListing.price}</h4>
                <p className="text-muted">Listed by Cayo Rentals</p>
              </div>
            </div>
            <Link to={{ pathname: `/${this.state.selectedListing.id}/rent`, state: { listing: this.state.selectedListing } }} className="btn btn-light btn-lg btn-block mt-3 mb-4">
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
            <Slider images={this.state.selectedListing.images} />
          </Modal>
        }
      </div>
    );
  }
}

export default Home;
