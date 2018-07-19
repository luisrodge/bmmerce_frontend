import React, { Component } from 'react';

import { Listing, ListingModal } from '../../common'

class Listings extends Component {
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
    if (this.props.gettingListings || this.props.listings.length === 0) { return null; }
    return (
      <div>
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
        {this.state.modalIsOpen &&
          <ListingModal
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            selectedListing={this.state.selectedListing}
          />
        }
      </div>
    );
  }
}

export default Listings;
