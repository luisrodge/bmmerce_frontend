import { connect } from 'react-redux';
import Home from './Home';
import { listingsOperations } from '../../modules/listings';

const mapStateToProps = (state) => {
    const { latestListings, gettingLatestListings } = state.listings;
    return { latestListings, gettingLatestListings };
};

const mapDispatchToProps = (dispatch) => {
    const getLatestListings = () => {
        dispatch(listingsOperations.getLatestListings());
    };
    return { getLatestListings };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;