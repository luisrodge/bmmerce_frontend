import { connect } from 'react-redux';
import SignIn from './SignIn';
import { authOperations } from '../../modules/auth';

const mapStateToProps = (state) => {
    const { user, authenticating, errors } = state.auth;
    return { user, authenticating, errors };
};

const mapDispatchToProps = (dispatch) => {
    const authenticate = (email, password) => {
        dispatch(authOperations.authenticate(email, password));
    };
    return { authenticate };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default SignInContainer;