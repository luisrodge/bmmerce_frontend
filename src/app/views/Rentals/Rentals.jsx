import React, { Component } from 'react';
import shortid from 'shortid';

import { Listing, ListingModal } from '../../common'

class Rentals extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedListing: {},
      page: 1
    };
  }

  componentDidMount() {
    this.props.getListings(1, 20);
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

  onNext = () => {
    let nextPage = this.state.page + 1
    this.props.getListings(false, nextPage, 20);
    this.setState({ page: nextPage });
  }

  onPrevious = () => {
    let previousPage = this.state.page - 1
    this.props.getListings(false, previousPage, 20);
    this.setState({ page: previousPage });
  }

  render() {
    if (this.props.gettingListings || this.props.listings.length === 0) { return null; }
    return (
      <div>
        <div className="row mb-3">
          <div className="col-md-12">
            <h3 className="">Rental Listings</h3>
          </div>
        </div>
        <div className="row">
          {this.props.listings.map((listing) =>
            <div className="col-md-3 mb-5" key={shortid.generate()}>
              <Listing
                listing={listing}
                onOpenModal={this.openModal}
                key={shortid.generate()}
              />
            </div>
          )}
        </div>
        <div className="row pb-5 pt-4">
          <div className="col-md-3 mx-auto">
            <div className="row">
              <div className="col-md-2">
                {this.state.page === 1 ? (
                  <i class="fas fa-chevron-left text-muted"></i>
                ) : (
                    <i class="fas fa-chevron-left pointer" onClick={this.onPrevious}></i>
                  )}
              </div>
              <div className="col-md-8 text-center">
                Page {this.state.page} of {this.props.totalPages}
              </div>
              <div className="col-md-2 text-right">
                {this.state.page === this.props.totalPages ? (
                  <i class="fas fa-chevron-right text-muted"></i>
                ) : (
                    <i class="fas fa-chevron-right pointer" onClick={this.onNext}></i>
                  )}
              </div>
            </div>
          </div>
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

export default Rentals;
