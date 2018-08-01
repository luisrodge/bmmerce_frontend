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
    } = state.listings.admin;
    const {
        modalIsOpen
    } = state.modal.newListingModal
    return {
        creatingListing,
        createListingErrors,
        modalIsOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    const createListing = (newListing) => {
        dispatch(listingsOperations.createListing(newListing));
    };
    const closeNewListingModal = () => dispatch(modalActions.closeNewListingModal());
    return {
        createListing,
        closeNewListingModal
    };
};

const NewListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListing);

export default NewListingContainer;