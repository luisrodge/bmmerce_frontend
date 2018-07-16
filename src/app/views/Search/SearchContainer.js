import { connect } from 'react-redux';
import Search from './Search';
import { searchOperations } from '../../modules/search';

const mapStateToProps = (state) => {
    const { results, errors, searching } = state.search;
    return { results, errors, searching };
};

const mapDispatchToProps = (dispatch) => {
    const search = (query) => {
        dispatch(searchOperations.search(query));
    };
    return { search };
};


const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;