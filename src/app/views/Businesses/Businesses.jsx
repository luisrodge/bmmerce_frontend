import React, { Component } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom'

import { Listing, ListingModal } from '../../common'

class Businesses extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getBusinesses();
  }

  render() {
    if (this.props.gettingBusinesses) { return null; }
    return (
      <div>
        <div className="row">
          {this.props.businesses.map((business) =>
            <div className="col-md-3" key={shortid.generate()}>
              <Link to={`/businesses/${business.id}`} className="card pointer card-link">
                <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1500576595%2F10-vault-of-midnight-ann-arbor-michigan-COMICS0717.jpg%3Fitok%3DmnGrqkkY&w=700&q=85" className="img-fluid" />
                <div className="card-body text-center">
                  <h4 className="card-title mb-1 text-truncate">{business.name}</h4>
                  <p className="mb-0 text-muted">
                    <i className="fas fa-map-marker-alt pr-2"></i>
                    {business.address}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Businesses;
