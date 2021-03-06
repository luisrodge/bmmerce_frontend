import {
    connect
} from 'react-redux';
import Header from './Header';
import {
    authOperations
} from '../../modules/auth';
import {
    modalActions
} from '../../modules/modal';

const mapStateToProps = (state) => {
    const {
        user,
        authenticated
    } = state.auth;
    return {
        user,
        authenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    const unauthenticate = () => {
        dispatch(authOperations.unauthenticate());
    };
    const openNewListingModal = () => dispatch(modalActions.openNewListingModal());
    const openAuthModal = () => dispatch(modalActions.openAuthModal());
    return {
        unauthenticate,
        openNewListingModal,
        openAuthModal
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;