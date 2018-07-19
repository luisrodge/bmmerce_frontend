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

const ListingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Listings);

export default ListingsContainer;