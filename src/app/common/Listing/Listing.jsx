import React from 'react';

const Listing = (props) => {
    return (
        <div className="card pointer" onClick={() => props.onOpenModal(props.listing)}>
            <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap" />
            <div className="card-body text-center">
                <h5 class="card-title mb-0">{props.listing.title}</h5>
                <p className="card-text mt-0 text-muted">{props.listing.address}</p>
                <h5 className="text-success mb-0">${props.listing.price}</h5>
            </div>
        </div>
    );
}

export default Listing;
