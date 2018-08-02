import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MinimalHeader.scss';

class MinimalHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light" id="minimal-nav">
        <div className="container">
          {this.props.account.type === 'business' ? (
              <Link to="/" className="business-logo">
                <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/p200x200/20620823_1641300702608341_3197949282608884166_n.png?_nc_cat=0&oh=8892fdc529068e3cc8ccbd01681521ca&oe=5C090038" alt="" />
                <span>{this.props.account.business_name}</span>
              </Link>
          ) : (
              <Link to="/" className="navbar-brand" id="minimal-logo">
                <span>b</span>mmerce
              </Link>
          )}

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <p to="/listings/new" className="nav-link pointer m-0 pr-0" onClick={this.props.openNewListingModal}>Post Listing</p>
              </li>
              <li className="nav-item mr-4">
                <Link to="/account" className="nav-link pointer m-0 pr-0">Account</Link>
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
