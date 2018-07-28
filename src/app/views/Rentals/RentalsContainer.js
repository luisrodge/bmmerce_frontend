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
        gettingListings
    } = state.listings.default;
    return {
        listings,
        gettingListings
    };
};

const mapDispatchToProps = (dispatch) => {
    const getListings = () => {
        dispatch(listingsOperations.getListings(true));
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