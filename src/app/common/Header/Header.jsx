import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center pt-2 logo">belize<span>rentify</span></h1>
              </div>
            </div>
            <div className="row">
              <div className="input-group col-md-5 mx-auto">
                <input className="form-control py-2 input-sm" type="search" placeholder="Search for something to rent..." id="example-search-input"/>
                <span className="input-group-append">
                  <button className="btn btn-outline-secondary border-left-0 border" type="button">
                      <i className="fa fa-search"></i>
                  </button>
                </span>
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
                <li className="nav-item mr-3">
                  <Link to="/" className="nav-link home">Home</Link>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="#">Rent</a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="#">How It Works</a>
                </li>
              </ul>
                {this.props.authenticated ? (
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-3">
                      <Link to="/listings/new" className="nav-link">New Listing</Link>
                    </li>
                    <li className="nav-item mr-3">
                      <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sign Out</a>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                      <Link to="/login" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Register</a>
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
