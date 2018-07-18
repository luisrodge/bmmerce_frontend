import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import LatestListings from './LatestListings';
import FeaturedListings from './FeaturedListings';
import { Slider } from '../../common';

const customStyles = {
  content: {
    top: '50%',
    left: '50.1%',
    right: '50.1%',
    bottom: 'auto',
    marginRight: '-50.1%',
    transform: 'translate(-50.1%, -50.1%)',
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

  onContactPoster = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-confirm-alert'>
            <h3 className="text-center mb-0">Contact This Poster</h3>
            <p>You may Contact this poster through any of the following:</p>
            <div className="text-center">
              <p>
                <i class="far fa-envelope"></i> Email: {this.state.selectedListing.contactEmail}
            </p>
              <p><i class="fas fa-mobile-alt"></i> Phone Call: {this.state.selectedListing.contactNumber}</p>
              <p>
                <i class="far fa-comment"></i> SMS: {this.state.selectedListing.contactNumber}
            </p>
              <p><i class="fab fa-whatsapp"></i> WhatsApp: {this.state.selectedListing.contactNumber}</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-light btn-block" onClick={() => {
                  onClose()
                }}>Done</button>
              </div>
            </div>
          </div>
        )
      }
    })
  };

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
                <p className="text-muted">Listed by {this.state.selectedListing.contactName}</p>
              </div>
            </div>
            <button onClick={this.onContactPoster} className="btn btn-light btn-lg btn-block mt-3 mb-4">
              <i class="fas fa-mobile-alt"></i> Contact Poster
            </button>
            <h5 className=" mb-1">Details:</h5>
            <p>{this.state.selectedListing.description}</p>
            <Slider images={this.state.selectedListing.images} />
          </Modal>
        }
      </div>
    );
  }
}

export default Home;
