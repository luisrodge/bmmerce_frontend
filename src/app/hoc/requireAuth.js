import React from 'react';
import { connect } from 'react-redux';
import {
    modalActions
} from '../modules/modal';

export default function (ComposedComponent) {
    class RequireAuth extends React.Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                // this.context.router.push('/');
                this.props.history.push('/');
                this.props.openAuthModal();
            }
        }

        componentDidUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            authenticated: state.auth.authenticated
        }
    };

    const mapDispatchToProps = (dispatch) => {
        const openAuthModal = () => dispatch(modalActions.openAuthModal());
        return {
            openAuthModal,
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
