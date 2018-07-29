import {
    connect
} from 'react-redux';
import {
    authOperations
} from '../../modules/auth';
import AuthModal from './AuthModal';
import {
    modalActions
} from '../../modules/modal';

const mapStateToProps = (state) => {
    const {
        user,
        authenticating,
        signInError
    } = state.auth;
    const {
        modalIsOpen
    } = state.modal.authModal
    return {
        user,
        authenticating,
        signInError,
        modalIsOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    const authenticate = (email, password) => {
        dispatch(authOperations.authenticate(email, password));
    };
    const closeAuthModal = () => dispatch(modalActions.closeAuthModal());
    return {
        authenticate,
        closeAuthModal
    };
};

const AuthModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthModal);

export default AuthModalContainer;