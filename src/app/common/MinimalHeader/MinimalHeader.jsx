import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MinimalHeader.scss';

class MinimalHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light" id="minimal-nav">
        <div className="container">
          <Link to="/" className="navbar-brand" id="minimal-logo">
            <img src="http://res.cloudinary.com/dwaavflqp/image/upload/v1532475995/BELIZERS-WebLogo_vo3rzh.png" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <Link to="/" className="nav-link home">Home</Link>
              </li>
              <li className="nav-item mr-0">
                <Link to="/listings/new" className="nav-link pr-0">Post Listing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MinimalHeader;
