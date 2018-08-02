import {
    connect
} from 'react-redux';
import Businesses from './Businesses';
import {
    businessesOperations
} from '../../modules/businesses';

const mapStateToProps = (state) => {
    const {
        businesses,
        gettingBusinesses,
    } = state.businesses;
    return {
        businesses,
        gettingBusinesses,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getBusinesses = () => {
        dispatch(businessesOperations.getBusinesses());
    };
    return {
        getBusinesses
    };
};

const BusinessesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Businesses);

export default BusinessesContainer;