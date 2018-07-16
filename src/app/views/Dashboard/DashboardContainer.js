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
        updatingListings
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
    return {
        getUserListings,
        updateListing
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;