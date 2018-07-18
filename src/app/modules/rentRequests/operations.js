import axios from 'axios';
import {
  push
} from 'connected-react-router'

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const createRentRequestAction = Actions.createRentRequest;
const createRentRequestSuccessAction = Actions.createRentRequestSuccess;
// const createRentRequestFailureAction = Actions.createRentRequestFailure;

const createRentRequest = (newRentRequest) => {
  console.log(newRentRequest);
  return dispatch => {
    dispatch(createRentRequestAction());
    axios.post(`${API_ROOT}/rent_requests`, {
        name: newRentRequest.name,
        contact_number: newRentRequest.contactNumber,
        rent_date: newRentRequest.rentDate,
        comment: newRentRequest.comment,
        listing_id: newRentRequest.listingId
      })
      .then(async (response) => {
        console.log(response);
        dispatch(createRentRequestSuccessAction());
        dispatch(push('/'));
      })
      .catch((error) => {
        console.log(error.response);
        // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
      });
  }
};


export default {
  createRentRequest,
};