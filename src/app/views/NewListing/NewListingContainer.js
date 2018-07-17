import {
    connect
} from 'react-redux';
import NewListing from './NewListing';
import {
    listingsOperations
} from '../../modules/listings';

const mapStateToProps = (state) => {
    const {
        creatingListing,
        createListingErrors
    } = state.listings.default;
    return {
        creatingListing,
        createListingErrors,
        userId: state.auth.user.user_id
    };
};

const mapDispatchToProps = (dispatch) => {
    const createListing = (newListing) => {
        dispatch(listingsOperations.createListing(newListing));
    };
    return {
        createListing
    };
};

const NewListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListing);

export default NewListingContainer;