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
