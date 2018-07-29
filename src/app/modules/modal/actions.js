import types from './types.js';

const openNewListingModal = () => ({
    type: types.OPEN_NEW_LISTING_MODAL
});

const closeNewListingModal = () => ({
    type: types.CLOSE_NEW_LISTING_MODAL,
});

const openAuthModal = () => ({
    type: types.OPEN_AUTH_MODAL
});

const closeAuthModal = () => ({
    type: types.CLOSE_AUTH_MODAL,
});

export default { 
    openNewListingModal,
    closeNewListingModal,
    openAuthModal,
    closeAuthModal
};