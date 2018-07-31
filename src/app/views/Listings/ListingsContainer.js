import {
    connect
} from 'react-redux';
import Listings from './Listings';
import {
    listingsOperations
} from '../../modules/listings';

const mapStateToProps = (state) => {
    const {
        listings,
        gettingListings,
        totalPages
    } = state.listings.default;
    return {
        listings,
        gettingListings,
        totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    const getListings = (rental, page, perPage) => {
        dispatch(listingsOperations.getListings(rental, page, perPage));
    };
    return {
        getListings
    };
};

const ListingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listings);

export default ListingsContainer;