import React from 'react';
import { Listing } from '../../common'

const FeaturedListings = (props) => {
    if (props.gettingFeaturedListings) { return null; }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4 className="pb-3">Featured Rentals</h4>
            </div>
            {props.featuredListings.map((listing, index) =>
                <div className="col-md-3" key={index}>
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
