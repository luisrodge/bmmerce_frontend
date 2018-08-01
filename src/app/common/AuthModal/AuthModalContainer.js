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
        signInError,
        registering
    } = state.auth;
    const {
        modalIsOpen
    } = state.modal.authModal
    return {
        user,
        authenticating,
        signInError,
        registering,
        modalIsOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    const authenticate = (email, password, businessSignIn) => {
        dispatch(authOperations.authenticate(email, password, businessSignIn));
    };
    const register = (name, email, password) => {
        dispatch(authOperations.register(name, email, password));
    };
    const closeAuthModal = () => dispatch(modalActions.closeAuthModal());
    return {
        authenticate,
        register,
        closeAuthModal
    };
};

const AuthModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthModal);

export default AuthModalContainer;