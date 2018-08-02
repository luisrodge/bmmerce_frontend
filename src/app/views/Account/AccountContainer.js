import {
    connect
} from 'react-redux';
import Account from './Account';
import {
    accountsOperations
} from '../../modules/accounts';

const mapStateToProps = (state) => {
    const {
        account,
        gettingAccount,
        updatingAccount
    } = state.accounts;
    return {
        account,
        gettingAccount,
        updatingAccount
    };
};

const mapDispatchToProps = (dispatch) => {
    const getAccount = () => {
        dispatch(accountsOperations.getAccount());
    };
    const updateAccount = (updatedAccount, avatarImage) => {
        dispatch(accountsOperations.updateAccount(updatedAccount, avatarImage));
    };
    return {
        getAccount,
        updateAccount
    };
};

const AccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);

export default AccountContainer;