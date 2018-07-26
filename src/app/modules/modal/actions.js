import types from './types.js';

const openModal = () => ({
    type: types.OPEN_MODAL
});

const closeModal = () => ({
    type: types.CLOSE_MODAL,
});

export default { 
    openModal,
    closeModal,
};