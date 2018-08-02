import axios from 'axios';

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const getBusinessesAction = Actions.getBusinesses;
const getBusinessesSuccessAction = Actions.getBusinessesSuccess;

const getBusinessAction = Actions.getBusiness;
const getBusinessSuccessAction = Actions.getBusinessSuccess;

const getBusinesses = () => {
  let baseUrl = `${API_ROOT}/businesses`;
  return dispatch => {
    dispatch(getBusinessesAction());
    axios.get(baseUrl)
      .then(function (response) {
        const responseData = response.data.businesses;
        console.log(response);
        let businesses = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            name: child.name,
            address: child.address,
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

const getBusiness = (id) => {
  let baseUrl = `${API_ROOT}/businesses/${id}`;
  return dispatch => {
    dispatch(getBusinessesAction());
    axios.get(baseUrl)
      .then(function (response) {
        const responseData = response.data.business;
        const business = {
          id: responseData.id,
          name: responseData.name,
          address: responseData.address
        }
        dispatch(getBusinessSuccessAction(business));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}


export default {
  getBusinesses,
  getBusiness
};