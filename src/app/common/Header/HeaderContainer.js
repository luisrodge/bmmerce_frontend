import { connect } from 'react-redux';
import Header from './Header';
import { authOperations } from '../../modules/auth';

const mapStateToProps = (state) => {
    const { user, authenticated } = state.auth;
    return { user, authenticated };
};

const mapDispatchToProps = (dispatch) => {
    const unauthenticate = () => {
        dispatch(authOperations.unauthenticate());
    };
    return { unauthenticate };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;