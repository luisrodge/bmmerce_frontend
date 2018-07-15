import React from 'react';

const Listing = (props) => {
    return (
        <div className="card pointer" onClick={() => props.onOpenModal(props.listing)}>
            <img class="img-fh" src="https://www.drive.sg/uploads/cars/Subaru-Impreza-5DR-idealrentalcar-2747-main.png" alt="Card image cap" />
            <div className="card-body">
                <h5 class="card-title">{props.listing.title}</h5>
                <p className="card-text">{props.listing.description}</p>
            </div>
        </div>
    );
}

export default Listing;
