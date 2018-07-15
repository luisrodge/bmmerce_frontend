import React from 'react';
import { Listing } from '../../common'

const FeaturedListings = (props) => {
    if (props.gettingFeaturedListings) { return null; }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4 className="pb-3">Featured Rentals</h4>
            </div>
            {props.featuredListings.map((listing) =>
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

export default FeaturedListings;
