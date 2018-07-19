import React, { Component } from 'react';

import LatestListings from './LatestListings';
import FeaturedListings from './FeaturedListings';
import { ListingModal } from '../../common';

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

export default Home;
