import {
    connect
} from 'react-redux';
import RentListing from './RentListing';
import {
    rentRequestsOperations
} from '../../modules/rentRequests';
import {
    listingsOperations
} from '../../modules/listings';

const mapStateToProps = (state) => {
    const {
        creatingRentRequest,
        createRentRequestErrors
    } = state.rentRequests;
    const {
        gettingListing,
        listing
    } = state.listings.default;
    return {
        creatingRentRequest,
        createRentRequestErrors,
        gettingListing,
        listing
    };
};

const mapDispatchToProps = (dispatch) => {
    const getListing = (id) => {
        dispatch(listingsOperations.getListing(id));
    };
    const createRentRequest = (newRentRequest) => {
        dispatch(rentRequestsOperations.createRentRequest(newRentRequest));
    };
    return {
        getListing,
        createRentRequest
    };
};

const RentListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RentListing);

export default RentListingContainer;