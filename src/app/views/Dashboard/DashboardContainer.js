import {
    connect
} from 'react-redux';
import Dashboard from './Dashboard';
import {
    listingsOperations
} from '../../modules/listings';

const mapStateToProps = (state) => {
    const {
        listings,
        gettingListings,
        updatingListings,
        deletingListing
    } = state.listings.admin;
    return {
        listings,
        gettingListings,
        updatingListings,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getListings = () => {
        dispatch(listingsOperations.getAdminListings());
    };
    const updateListing = (updatedListing, newImages) => {
        dispatch(listingsOperations.updateListing(updatedListing, newImages));
    };
    const deleteListing = (id) => {
        dispatch(listingsOperations.deleteListing(id));
    };
    return {
        getListings,
        updateListing,
        deleteListing
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;