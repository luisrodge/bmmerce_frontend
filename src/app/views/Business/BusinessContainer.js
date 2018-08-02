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
        gettingListings,
        totalPages
    } = state.businesses;
    return {
        business,
        gettingBusiness,
        listings,
        gettingListings,
        totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    const getBusiness = (id) => {
        dispatch(businessesOperations.getBusiness(id));
    };
    const getBusinessListings = (id, page) => {
        dispatch(businessesOperations.getBusinessListings(id, page));
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