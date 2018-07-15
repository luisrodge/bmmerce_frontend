import {
    connect
} from 'react-redux';
import Rent from './Rent';
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
        dispatch(listingsOperations.getListings());
    };
    return {
        getListings
    };
};

const RentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rent);

export default RentContainer;