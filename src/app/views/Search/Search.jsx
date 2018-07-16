import React from 'react';
import { Link } from 'react-router-dom';

import { Listing } from '../../common'

class Search extends React.Component {

    componentDidMount() {
        this.props.search(this.props.term);
    }

    componentDidUpdate(prevProps) {
        if (this.props.term !== prevProps.term) {
            this.props.search(this.props.term);
        }
    }

    render() {
        if (this.props.searching) { return <p className="text-center">Searching...</p> }
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
            </div>
        );
    }
}

export default Search;