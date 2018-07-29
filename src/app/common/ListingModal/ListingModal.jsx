import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import { FormattedDate, FormattedNumber } from 'react-intl';
import { confirmAlert } from 'react-confirm-alert'; // Import
import Lightbox from 'react-images';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import shortid from 'shortid';


const customStyles = {
    content: {
        top: '50%',
        left: '50.1%',
        right: '50.1%',
        bottom: 'auto',
        marginRight: '-50.1%',
        transform: 'translate(-50.1%, -50.1%)',
        maxHeight: '100vh', // <-- This sets the height
        overlfow: 'scroll' // <-- This tells the modal to scrol
    },
    overlay: {
        zIndex: 10
    }
};

Modal.setAppElement('#root');

const onContactPoster = (listing) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='custom-confirm-alert'>
                    <h3 className="text-center mb-0">Contact This Poster</h3>
                    <p className="text-center">You may contact this poster through any of the following:</p>
                    <div className="text-center">
                        <p>
                            <i className="far fa-envelope"></i> Email: {listing.contactEmail}
                        </p>
                        <p><i className="fas fa-mobile-alt"></i> Contact Number: {listing.contactNumber}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-light btn-block" onClick={() => {
                                onClose()
                            }}>Done</button>
                        </div>
                    </div>
                    <h6 className="mt-3 text-muted">
                        <i className="fas fa-exclamation-circle pr-1"></i> Always do face to face transactions. Avoid scamming by avoiding online banking transactions.
                    </h6>
                </div>
            )
        }
    })
};

const ListingModal = (props) => {
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
        >
            <div className="row mb-4">
                <div className="col-md-8">
                    <h3 className="m-0">{props.selectedListing.title}</h3>
                    <p className="text-muted">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {props.selectedListing.address}
                    </p>
                </div>
                <div className="col-md-4 text-right">
                    <h4 className="text-success m-0">$<FormattedNumber value={props.selectedListing.price} /></h4>
                    <p className="text-muted">Listed by {props.selectedListing.contactName}</p>
                </div>
            </div>
            {/* {props.selectedListing.isRental ? (
                <Link to={`/${props.selectedListing.id}/rent`} className="btn btn-light btn-lg btn-block mt-3 mb-4">
                    <i className="fas fa-arrow-alt-circle-right pr-1"></i> Send Rent Request
                </Link>
            ) : (
                    <button onClick={() => onContactPoster(props.selectedListing)} className="btn btn-light btn-lg btn-block mt-3 mb-4">
                        <i className="fas fa-mobile-alt pr-1"></i> Contact Poster
                </button>
                )} */}

            {props.selectedListing.description &&
                <p className="py-2">{props.selectedListing.description}</p>
            }

            <div className="row">
                {props.selectedListing.images.length === 1 ? (
                     <div className="col-md-12 mb-2">
                        <img
                            src={props.selectedListing.images[0]['src']}
                            key={shortid.generate()}
                            className="img-fluid"
                        />
                    </div>
                ) : (
                    props.selectedListing.images.map((image, index) =>
                        <div className="col-md-4 mb-2" key={shortid.generate()}>
                            <img
                                src={image['src']}
                                key={shortid.generate()}
                                className="img-fh pointer img-border"
                                onClick={(i, e) => props.onOpenLightbox(index, e)}
                            />
                        </div>
                    )
                )}
            </div>

            <p className="text-center mt-3 mb-0">
                <span className="pr-1">Posted on</span>
                <FormattedDate
                    value={props.selectedListing.createdAt}
                    year='numeric'
                    month='long'
                    day='2-digit'
                />
            </p>
        </Modal>
    );
}

export default ListingModal;
