import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { Listing, Slider } from '../../common'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '100vh', // <-- This sets the height
        overlfow: 'scroll' // <-- This tells the modal to scrol
    },
    overlay: {
        zIndex: 10
    }
};

Modal.setAppElement('#root');

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            selectedListing: {}
        };
    }

    componentDidMount() {
        this.props.search(this.props.term);
    }

    componentDidUpdate(prevProps) {
        if (this.props.term !== prevProps.term) {
            this.props.search(this.props.term);
        }
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            selectedListing: {}
        });
    }

    openModal = (listing) => {
        this.setState({
            modalIsOpen: true,
            selectedListing: listing
        });
    }

    render() {
        if (this.props.searching) { return <p className="text-center">Searching...</p>; }
        return (
            <div className="container">
                <div className="row">
                    {this.props.results.map((listing, index) =>
                        <div className="col-md-3 mb-5" key={index}>
                            <Listing
                                listing={listing}
                                onOpenModal={this.openModal}
                            />
                        </div>
                    )}
                </div>
                {this.state.modalIsOpen &&
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        shouldCloseOnOverlayClick={true}
                        contentLabel="Listing View"
                        ariaHideApp={true}
                    >
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="m-0">{this.state.selectedListing.title}</h4>
                                <p className="text-muted">{this.state.selectedListing.address}</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <h4 className="text-success m-0">${this.state.selectedListing.price}</h4>
                                <p className="text-muted">Listed by Cayo Rentals</p>
                            </div>
                        </div>
                        <Link to={{ pathname: `/${this.state.selectedListing.id}/rent`, state: { listing: this.state.selectedListing } }} className="btn btn-light btn-lg btn-block mt-3 mb-4">
                            Send Rent Request
                        </Link>
                        {this.state.selectedListing.priceDetails &&
                            <div>
                                <h5 className="mb-1">Pricing Details:</h5>
                                <p>{this.state.selectedListing.priceDetails}</p>
                                <hr />
                            </div>
                        }
                        <h5 className=" mb-1">Other Information:</h5>
                        <p>{this.state.selectedListing.description}</p>
                        <Slider images={this.state.selectedListing.images} />
                    </Modal>
                }
            </div>
        );
    }
}

export default Search;