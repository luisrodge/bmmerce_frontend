import {
    connect
} from 'react-redux';
import Search from './Search';
import {
    searchOperations
} from '../../modules/search';

const mapStateToProps = (state) => {
    const {
        results,
        errors,
        searching,
        totalPages
    } = state.search;
    return {
        results,
        errors,
        searching,
        totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    const search = (query, page) => {
        dispatch(searchOperations.search(query, page));
    };
    return {
        search
    };
};


const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;