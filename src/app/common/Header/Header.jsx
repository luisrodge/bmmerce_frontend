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
              <div className="col-md-12 text-center">
                <Link to="/" className="text-center pt-2 logo">
                  belizesell
                </Link>
              </div>
            </div>
            <div className="row">
              <SearchForm />
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
                <li className="nav-item mr-3">
                  <Link to="/" className="nav-link home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/listings" className="nav-link home">Browse All Listings</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                  <Link to="/listings/new" className="nav-link btn btn-light">Post New Listing</Link>
                </li>
              </ul>
              {/* {this.props.authenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-3">
                    <Link to="/listings/new" className="nav-link">Post Listing</Link>
                  </li>
                  <li className="nav-item mr-3">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link pointer" onClick={this.props.unauthenticate}>Sign Out</p>
                  </li>
                </ul>
              ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                      <Link to="/listings/new" className="nav-link">Post Listing</Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/login" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link pr-0" href="#">Register</a>
                    </li>
                  </ul>
                )} */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
