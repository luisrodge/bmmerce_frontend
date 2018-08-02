import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import Listings from './Listings';
import './Business.scss'

class Business extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getBusiness(this.props.id);
    this.props.getBusinessListings(this.props.id);
  }

  render() {
    if (this.props.gettingBusiness) { return null; }
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top">
          <div className="container">
            <Link to="/">
              <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p200x200/20620823_1641300702608341_3197949282608884166_n.png?_nc_cat=0&oh=8892fdc529068e3cc8ccbd01681521ca&oe=5C090038" className="business-page-logo" />
            </Link>
            <Link to="/" class="navbar-brand">{this.props.business.name}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <p className="m-0 address">
              <i className="fas fa-map-marker-alt pr-2"></i>
              {this.props.business.address}
            </p>
            <div class="collapse navbar-collapse" id="navbarCollapse">

              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container business-container">
          {this.props.gettingListings ? (
            <p className="text-center">Loading listings....</p>
          ) : (
            <Listings listings={this.props.listings} />
          )}
        </div>
      </div>
    );
  }
}

export default Business;
