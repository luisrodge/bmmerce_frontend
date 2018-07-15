import axios from 'axios';
import { push } from 'connected-react-router'

import Actions from './actions';
import { API_ROOT } from '../../utils/apiConfig';

const getLatestListingsAction = Actions.getLatetsListings;
const getLatestListingsSuccessAction = Actions.getLatestListingsSuccess;
const getLatestListingsFailureAction = Actions.getLatestListingsFailure;

const createListingAction = Actions.createListing;
const createListingSuccessAction = Actions.createListingSuccess;
const createListingFailureAction = Actions.createListingFailure;

const createListing = (newListing) => {
  console.log(newListing);
  let imagesData = new FormData();
  for (var i=0; i<newListing.pictures.length; i++) {
      imagesData.append("pictures", newListing.pictures[i]);  
  }
  return dispatch => {
    dispatch(createListingAction());
    console.log(imagesData);
    axios.post(`${API_ROOT}/listings`, {
      title: newListing.title,
      description: newListing.description,
      price: newListing.price,
      price_details: newListing.priceDetails,
      address: newListing.address,
      images: imagesData,
      user_id: newListing.userId
    })
    .then(async (response) => {
      console.log(response);
      dispatch(createListingSuccessAction(response.data));
      // dispatch(push('/dashboard'));
    })
    .catch((error) => {
      console.log(error.response);
      // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
    });
  }
};


export default { 
  createListing, 
};