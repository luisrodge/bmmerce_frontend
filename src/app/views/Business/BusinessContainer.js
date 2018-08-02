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
    } = state.businesses;
    return {
        business,
        gettingBusiness,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getBusiness = (id) => {
        dispatch(businessesOperations.getBusiness(id));
    };
    return {
        getBusiness
    };
};

const BusinessContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Business);

export default BusinessContainer;