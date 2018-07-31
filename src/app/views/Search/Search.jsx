import React from 'react';
import shortid from 'shortid';

import { Listing, ListingModal } from '../../common'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            selectedListing: {},
            page: 1,
        };
    }

    componentDidMount() {
        this.props.search(this.props.term, 1);
    }

    componentDidUpdate(prevProps) {
        if (this.props.term !== prevProps.term) {
            this.props.search(this.props.term, 1);
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
        console.log("sdsdsd", this.props.results.length)
        if (this.props.searching) { return <p className="text-center">Searching...</p>; }
        return (
            <div className="container">
                <div className="row">
                    {this.props.results.map((listing) =>
                        <div className="col-md-3 mb-5" key={shortid.generate()}>
                            <Listing
                                listing={listing}
                                onOpenModal={this.openModal}
                                key={shortid.generate()}
                            />
                        </div>
                    )}
                </div>
                {this.props.results.length > 0 &&
                    <div className="row pb-5 pt-4">
                        <div className="col-md-3 mx-auto">
                            <div className="row">
                                <div className="col-md-2">
                                    {this.state.page === 1 ? (
                                        <i className="fas fa-chevron-left text-muted"></i>
                                    ) : (
                                            <i className="fas fa-chevron-left pointer" onClick={this.onPrevious}></i>
                                        )}
                                </div>
                                <div className="col-md-8 text-center">
                                    Page {this.state.page} of {this.props.totalPages}
                                </div>
                                <div className="col-md-2 text-right">
                                    {this.state.page === this.props.totalPages ? (
                                        <i className="fas fa-chevron-right text-muted"></i>
                                    ) : (
                                            <i className="fas fa-chevron-right pointer" onClick={this.onNext}></i>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {this.state.modalIsOpen &&
                    <ListingModal
                        modalIsOpen={this.state.modalIsOpen}
                        closeModal={this.closeModal}
                        selectedListing={this.state.selectedListing}
                    />
                }
            </div>
        );
    }
}

export default Search;