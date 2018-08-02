import axios from 'axios';

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const getBusinessesAction = Actions.getBusinesses;
const getBusinessesSuccessAction = Actions.getBusinessesSuccess;

const getBusinessAction = Actions.getBusiness;
const getBusinessSuccessAction = Actions.getBusinessSuccess;

const getBusinessListingsAction = Actions.getBusinessListings;
const getBusinessListingsSuccessAction = Actions.getBusinessListingsSuccess;

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
    dispatch(getBusinessAction());
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

const getBusinessListings = (id, page) => {
  let baseUrl = `${API_ROOT}/listing_type/businesses/${id}?page=${page}`;
  return dispatch => {
    dispatch(getBusinessListingsAction());
    axios.get(baseUrl)
      .then(function (response) {
        const responseData = response.data.listings;
        const meta = response.data.meta;
        console.log("mete", meta);
        let listings = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            description: child.description,
            images: child.images.map(image => ({
              src: image.listing_image.url
            })),
            isRental: child.is_rental,
            createdAt: child.created_at
          };
          listings.push(childData);
        });
        dispatch(getBusinessListingsSuccessAction(listings, meta.total_pages));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}


export default {
  getBusinesses,
  getBusiness,
  getBusinessListings
};