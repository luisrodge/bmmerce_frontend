import {
    connect
} from 'react-redux';
import Businesses from './Businesses';
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

const BusinessesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Businesses);

export default BusinessesContainer;