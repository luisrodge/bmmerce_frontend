import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MinimalHeader.scss';

class MinimalHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light" id="minimal-nav">
        <div className="container">
          <Link to="/" className="navbar-brand" id="minimal-logo">
            <span>b</span>mmerce
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <p to="/listings/new" className="nav-link pointer m-0 pr-0" onClick={this.props.openNewListingModal}>Post Listing</p>
              </li>
              <li className="nav-item mr-0">
                <p to="/" className="nav-link pointer m-0" onClick={this.props.unauthenticate}>Sign Out</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MinimalHeader;
