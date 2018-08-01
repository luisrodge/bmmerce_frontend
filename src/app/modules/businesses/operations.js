import axios from 'axios';

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';


const getBusinessesAction = Actions.getBusinesses;
const getBusinessesSuccessAction = Actions.getBusinessesSuccess;

const getBusinesses = () => {
  let baseUrl = `${API_ROOT}/businesses`;
  return dispatch => {
    dispatch(getBusinessesAction());
    axios.get(baseUrl, {
        params: {
          page: page,
          limit: limit
        }
      })
      .then(function (response) {
        const responseData = response.data.listings;
        console.log(response);
        let businesses = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            name: child.name,
          };
          businesses.push(childData);
        });
        console.log("herer", businesses);
        dispatch(getBusinessesSuccessAction(businesses));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}


export default {
  getListings,
};