import {
    connect
} from 'react-redux';
import Dashboard from './Dashboard';
import {
    listingsOperations
} from '../../modules/listings';

const mapStateToProps = (state) => {
    const {
        userListings,
        gettingUserListings,
        updatingListings,
        deletingListing
    } = state.listings.userListings;
    const {
        user
    } = state.auth
    return {
        userListings,
        gettingUserListings,
        updatingListings,
        userId: user.user_id,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getUserListings = (id) => {
        dispatch(listingsOperations.getUserListings(id));
    };
    const updateListing = (updatedListing) => {
        dispatch(listingsOperations.updateListing(updatedListing));
    };
    const deleteListing = (id) => {
        dispatch(listingsOperations.deleteListing(id));
    };
    return {
        getUserListings,
        updateListing,
        deleteListing
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;