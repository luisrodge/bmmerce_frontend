import React from 'react';

const Listing = (props) => {
    return (
        <div className="card pointer listing-card" onClick={() => props.onOpenModal(props.listing)}>
            <img className="img-fh" src={props.listing.images[0]['listing_image']['url']} alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title mb-0">{props.listing.title}</h5>
                <p className="card-text mt-0 text-muted">{props.listing.address}</p>
                <h5 className="text-success mb-0">${props.listing.price}</h5>
            </div>
        </div>
    );
}

export default Listing;
