import React from 'react';
import { Listing } from '../../common'

const LatestListings = (props) => {
    if (props.gettingLatestListings) { return null; }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4 className="pb-3">Latest Rentals</h4>
            </div>
            {props.latestListings.map((listing) =>
                <div className="col-md-3">
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
