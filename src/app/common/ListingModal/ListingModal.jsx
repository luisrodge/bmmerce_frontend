import React from 'react';
import Modal from 'react-modal';
import { FormattedDate, FormattedNumber } from 'react-intl';
import shortid from 'shortid';
import { Link } from 'react-router-dom';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-45%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '100vh', // <-- This sets the height
        overlfow: 'scroll' // <-- This tells the modal to scrol
    },
    overlay: {
        zIndex: 10
    }
};

Modal.setAppElement('#root');

const ListingModal = (props) => {
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
        >
            <div className="text-center app-notice">
                <p className="py-1 px-2">
                    <i className="fas fa-exclamation-circle pr-2"></i>
                    Install our app to engage in conversation with this poster</p>
            </div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <h3 className="m-0">{props.selectedListing.title}</h3>
                    <p className="text-muted">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {props.selectedListing.address}
                    </p>
                </div>
                {!props.business && 
                <div className="col-md-4 text-right">
                    <h4 className="text-success m-0">$<FormattedNumber value={props.selectedListing.price} /></h4>
                    {props.selectedListing.listedBy.business ? (
                        <Link to={`/businesses/${props.selectedListing.listedBy.account.id}`} className="text-muted">
                            Listed by {props.selectedListing.listedBy.account.name }
                        </Link>
                    ) : (
                        <p className="text-muted">
                            Listed by {props.selectedListing.listedBy.account.name }
                        </p>
                    )}
                   
                </div>
                }
            </div>

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
