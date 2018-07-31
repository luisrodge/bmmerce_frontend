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
// const searchFailureAction = Actions.searchFailure;

const onSearch = (query) => {
  return dispatch => {
    dispatch(push(`/search/${query}`, 1));
  }
};

const search = (query, page = null) => {
  let fullUrl = `${API_ROOT}/search`;
  return dispatch => {
    dispatch(searchAction());
    axios.get(fullUrl, {
        params: {
          query: query,
          page: page,
        }
      })
      .then(function (response) {
        const responseData = response.data.listings;
        const meta = response.data.meta;
        console.log("res", response.data)
        if (response.data !== "") {
          let data = [];
          responseData.map(child => {
            const childData = {
              id: child.id,
              title: child.title,
              price: child.price,
              address: child.address,
              description: child.description,
              contactName: child.contact_name,
              contactEmail: child.contact_email,
              userId: child.user_id,
              images: child.images.map(image => ({
                src: image.listing_image.url
              })),
              createdAt: child.created_at
            };
            data.push(childData);
          });
          dispatch(searchSuccessAction(data,  meta.total_pages));
        } else { 
          dispatch(searchSuccessAction([]));
        }
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