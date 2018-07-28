import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SearchForm } from '../';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-2 logo-wrapper">
                <Link to="/" className="text-center logo">
                  <img src="http://res.cloudinary.com/dwaavflqp/image/upload/v1532475995/BELIZERS-WebLogo_vo3rzh.png" className="img-fluid" />
                </Link>
              </div>
              <div className="col-md-8  search-wrapper">
                <SearchForm />
              </div>
              <div className="col-md-2 new-post-wrapper">
                <button onClick={this.props.openModal} className="btn btn-green btn-block">
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
                <li className="nav-item">
                  <Link to="/listings" className="nav-link home">Rentals</Link>
                </li>
              </ul>
              {this.props.authenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-3">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link pointer m-0 pr-0" onClick={this.props.unauthenticate}>Sign Out</p>
                  </li>
                </ul>
              ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5">
                      <Link to="/login" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link pr-0" href="#">Register</a>
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
