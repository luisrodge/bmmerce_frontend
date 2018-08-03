import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListingModal } from '../../common';
import Listings from './Listings';
import './Business.scss'

class Business extends Component {
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
    this.props.getBusiness(this.props.id, 1);
    this.props.getBusinessListings(this.props.id);
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
    this.props.getBusinessListings(this.props.id, nextPage);
    this.setState({ page: nextPage });
  }

  onPrevious = () => {
    let previousPage = this.state.page - 1
    this.props.getBusinessListings(this.props.id, previousPage);
    this.setState({ page: previousPage });
  }

  render() {
    if (this.props.gettingBusiness) { return null; }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            {this.props.business.logo &&
              <Link to="/">
                <img src={this.props.business.logo} className="business-page-logo" />
              </Link>
            }
            <Link to="/" className="navbar-brand">{this.props.business.name}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <p className="m-0 address">
              <i className="fas fa-map-marker-alt pr-2"></i>
              {this.props.business.address}
            </p>
            <div className="collapse navbar-collapse" id="navbarCollapse">

              <ul className="navbar-nav ml-auto">
                <li className="nav-item active mr-4">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/businesses" className="nav-link">Businesses</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container business-container">
          {this.props.gettingListings ? (
            <p className="text-center">Loading listings....</p>
          ) : (
              <Listings
                listings={this.props.listings}
                onOpenModal={this.openModal}
              />
            )}
          {this.props.totalPages > 0 &&
            <div className="row mt-4">
              <div className="col-md-3 mx-auto">
                <div className="row pt-5">
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
          }
        </div>

        {this.state.modalIsOpen &&
          <ListingModal
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            selectedListing={this.state.selectedListing}
            onOpenLightbox={this.openLightbox}
            business={true}
          />
        }
      </div>
    );
  }
}

export default Business;
