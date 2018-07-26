import {
    connect
} from 'react-redux';
import NewListing from './NewListing';
import {
    listingsOperations
} from '../../modules/listings';
import {
    modalActions
} from '../../modules/modal';

const mapStateToProps = (state) => {
    const {
        creatingListing,
        createListingErrors
    } = state.listings.default;
    const {
        modalIsOpen
    } = state.modal
    return {
        creatingListing,
        createListingErrors,
        modalIsOpen,
        userId: state.auth.user.user_id
    };
};

const mapDispatchToProps = (dispatch) => {
    const createListing = (newListing) => {
        dispatch(listingsOperations.createListing(newListing));
    };
    const closeModal = () => dispatch(modalActions.closeModal());
    return {
        createListing,
        closeModal
    };
};

const NewListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListing);

export default NewListingContainer;