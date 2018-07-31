import {
    connect
} from 'react-redux';
import Rentals from './Rentals';
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
    const getListings = (page, limit) => {
        dispatch(listingsOperations.getListings(true, page, limit));
    };
    return {
        getListings
    };
};

const RentalsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rentals);

export default RentalsContainer;