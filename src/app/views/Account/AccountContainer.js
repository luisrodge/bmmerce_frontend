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
        updatingAccount,
        business,
        gettingBusiness,
        updatingBusiness
    } = state.accounts;
    return {
        account,
        gettingAccount,
        updatingAccount,
        business,
        gettingBusiness,
        updatingBusiness,
        authType: state.auth.account.type
    };
};

const mapDispatchToProps = (dispatch) => {
    const getAccount = () => {
        dispatch(accountsOperations.getAccount());
    };
    const updateAccount = (updatedAccount, avatarImage) => {
        dispatch(accountsOperations.updateAccount(updatedAccount, avatarImage));
    };
    const getBusiness = () => {
        dispatch(accountsOperations.getBusiness());
    };
    const updateBusiness = (updatedBusiness, logo, coverImage) => {
        dispatch(accountsOperations.updateBusiness(updatedBusiness, logo, coverImage));
    };
    return {
        getAccount,
        updateAccount,
        getBusiness,
        updateBusiness
    };
};

const AccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);

export default AccountContainer;