import types from './types';

const INITIAL_STATE = {
    modalIsOpen: false,
}

const modalReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.OPEN_MODAL: {
          return {
            ...state,
            modalIsOpen: true,
          }
        }
        
        case types.CLOSE_MODAL: {
          return {
            ...state,
            modalIsOpen: false
          }
        }

        default: return state;
    }
}

export default modalReducer;