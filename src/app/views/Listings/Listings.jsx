import React, { Component } from 'react';
import shortid from 'shortid';
import Lightbox from 'react-images';

import { Listing, ListingModal } from '../../common'

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedListing: {},
      lightboxIsOpen: false,
      currentImage: 0,
      page: 1,
    };
  }

  componentDidMount() {
    console.log("LAST", this.props.lastPage);
    this.props.getListings(false, 1, 20);
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

  openLightbox = (index) => {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
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
                  <i className="fas fa-chevron-left text-muted"></i>
                ) : (
                  <i className="fas fa-chevron-left pointer" onClick={this.onPrevious}></i>
                )}
              </div>
              <div className="col-md-8 text-center">
                Page {this.state.page} of {this.props.totalPages}
              </div>
              <div className="col-md-2 text-right">
                {this.state.page === this.props.totalPages ? (
                  <i className="fas fa-chevron-right text-muted"></i>
                ) : (
                  <i className="fas fa-chevron-right pointer" onClick={this.onNext}></i>
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
            onOpenLightbox={this.openLightbox}
          />
        }
        {this.state.lightboxIsOpen &&
          <Lightbox
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClose={this.closeLightbox}
            images={this.state.selectedListing.images}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
          />
        }
      </div>
    );
  }
}

export default Listings;
