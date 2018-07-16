import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { searchOperations } from '../../modules/search';

const mapDispatchToProps = (dispatch) => {
    const onSearch = (query) => {
        dispatch(searchOperations.onSearch(query));
    };
    return { onSearch };
};

const SearchFormContainer = connect(
    null,
    mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;