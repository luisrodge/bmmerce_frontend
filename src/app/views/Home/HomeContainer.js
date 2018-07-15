import { connect } from 'react-redux';
import Home from './Home';
import { listingsOperations } from '../../modules/listings';

const mapStateToProps = (state) => {
    const { latestListings, gettingLatestListings } = state.listings.default;
    const { featuredListings, gettingFeaturedListings } = state.listings.featured;
    return { 
        latestListings, 
        gettingLatestListings,
        featuredListings,
        gettingFeaturedListings
    };
};

const mapDispatchToProps = (dispatch) => {
    const getLatestListings = () => {
        dispatch(listingsOperations.getLatestListings());
    };
    const getFeaturedListings = () => {
        dispatch(listingsOperations.getFeaturedListings());
    };
    return { getLatestListings, getFeaturedListings };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;