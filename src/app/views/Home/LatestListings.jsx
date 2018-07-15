import React from 'react';

const LatestListings = (props) => {
    if (props.gettingLatestListings) { return null; }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4 className="pb-3">Latest Rentals</h4>
            </div>
            {props.latestListings.map((listing) =>
                <div className="col-md-3">
                    <div className="card">
                    <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title">{listing.title}</h5>
                        <p className="card-text">{listing.description}</p>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LatestListings;
