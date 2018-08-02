import React from 'react';
import { FormattedNumber } from 'react-intl';
import shortid from 'shortid';


const Listings = (props) => {
    return (
        <div className="row">
            {props.listings.map((listing) =>
                <div className="col-md-3" key={shortid.generate()}>
                    <div className="card pointer" onClick={() => props.onOpenModal(listing)}>
                        <img className="img-fh" src={listing.images[0]['src']} alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 text-truncate">{listing.title}</h5>
                            <h5 className="text-success mb-0 mt-1">
                                $<FormattedNumber value={listing.price} />
                            </h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Listings;
