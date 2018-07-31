import React from 'react';
import { FormattedRelative, FormattedNumber } from 'react-intl';

const Listing = (props) => {
    return (
        <div className="card pointer listing-card" onClick={() => props.onOpenModal(props.listing)}>
            <img className="img-fh" src={props.listing.images[0]['src']} alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title mb-0 text-truncate">{props.listing.title}</h5>
                <p className="card-text mt-0 mb-1 text-muted">
                    <i className="fas fa-map-marker-alt pr-2"></i>
                    {props.listing.address}
                </p>
                <h5 className="text-success mb-0 mt-0">
                    $<FormattedNumber value={props.listing.price} />
                </h5>
            </div>
            <div className="footer text-muted">
                <FormattedRelative value={props.listing.createdAt} />
            </div>
        </div>
    );
}

export default Listing;
