import {
    connect
} from 'react-redux';
import Business from './Business';
import {
    businessesOperations
} from '../../modules/businesses';

const mapStateToProps = (state) => {
    const {
        business,
        gettingBusiness,
        listings,
        gettingListings
    } = state.businesses;
    return {
        business,
        gettingBusiness,
        listings,
        gettingListings
    };
};

const mapDispatchToProps = (dispatch) => {
    const getBusiness = (id) => {
        dispatch(businessesOperations.getBusiness(id));
    };
    const getBusinessListings = (id) => {
        dispatch(businessesOperations.getBusinessListings(id));
    };
    return {
        getBusiness,
        getBusinessListings
    };
};

const BusinessContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Business);

export default BusinessContainer;