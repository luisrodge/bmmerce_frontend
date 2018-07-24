import React from 'react';
import { Listing } from '../../common'

const LatestListings = (props) => {
    if (props.gettingLatestListings || props.latestListings.length === 0) { return null; }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4 className="pb-4">Latest Listings</h4>
            </div>
            {props.latestListings.map((listing, index) =>
                <div className="col-md-3 mb-5" key={index}>
                    <Listing
                        listing={listing}
                        onOpenModal={props.onOpenModal}
                    />
                </div>
            )}
        </div>
    );
}

export default LatestListings;
