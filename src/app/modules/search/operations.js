import axios from 'axios';
import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';
import {
  push
} from 'connected-react-router'

const searchAction = Actions.search;
const searchSuccessAction = Actions.searchSuccess;
const searchFailureAction = Actions.searchFailure;

const onSearch = (query) => {
  return dispatch => {
    dispatch(push(`/search/${query}`));
  }
};

const search = (query) => {
  return dispatch => {
    dispatch(searchAction());
    axios.get(`${API_ROOT}/search?query=${query}`)
      .then(function (response) {
        const responseData = response.data;
        console.log(responseData);
        let data = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            priceDetails: child.price_details,
            description: child.description,
            userId: child.user_id
          };
          data.push(childData);
        });
        dispatch(searchSuccessAction(data));
      })
      .catch(function (error) {
        //console.log("Errors", error.response.data.data);
        //dispatch(searchFailureAction(error.response.data.data));
      });
  }
};

export default {
  onSearch,
  search
}