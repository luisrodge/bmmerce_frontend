import React from 'react';
import shortid from 'shortid';

import { Listing, ListingModal } from '../../common'

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