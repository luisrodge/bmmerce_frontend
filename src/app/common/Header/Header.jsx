import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SearchForm } from '../';

import './Header.scss';

class Header extends Component {

  openNewListingModal = () => {
    if (this.props.authenticated) {
      this.props.openNewListingModal();
    } else {
      this.props.openAuthModal();
    }
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-2 logo-wrapper">
                <Link to="/" className="logo">
                  <span>b</span>mmerce
                </Link>
              </div>
              <div className="col-md-7  search-wrapper">
                <SearchForm />
              </div>
              <div className="col-md-3 new-post-wrapper">
                <button onClick={this.openNewListingModal} className="btn btn-green btn-block btn-lg">
                  <i className="fas fa-camera mr-1"></i> Post New Listing
                </button>
              </div>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-md navbar-light" id="main-nav">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-3">
                <li className="nav-item mr-5">
                  <Link to="/" className="nav-link home">Home</Link>
                </li>
                <li className="nav-item mr-5">
                  <Link to="/rentals" className="nav-link home">Rentals</Link>
                </li>
                <li className="nav-item">
                  <Link to="/businesses" className="nav-link home">Businesses</Link>
                </li>
              </ul>
              {this.props.authenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-5">
                    <Link to="/dashboard" className="nav-link">
                      <i className="far fa-user-circle pr-1"></i> Your Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link pointer m-0 pr-0" onClick={this.props.unauthenticate}>Sign Out</p>
                  </li>
                </ul>
              ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <p className="nav-link m-0 pr-0 pointer" onClick={this.props.openAuthModal}>Sign In To Your Account</p>
                    </li>
                  </ul>
                )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
