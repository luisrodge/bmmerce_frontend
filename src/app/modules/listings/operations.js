import axios from 'axios';
import {
  push
} from 'connected-react-router'

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const getListingAction = Actions.getListing;
const getListingSuccessAction = Actions.getListingSuccess;

const getListingsAction = Actions.getListings;
const getListingsSuccessAction = Actions.getListingsSuccess;

const getLatestListingsAction = Actions.getLatetsListings;
const getLatestListingsSuccessAction = Actions.getLatestListingsSuccess;

const getFeaturedListingsAction = Actions.getFeaturedListings;
const getFeaturedListingsSuccessAction = Actions.getFeaturedListingsSuccess;

const getUserListingsAction = Actions.getUserListings;
const getUserListingsSuccessAction = Actions.getUserListingsSuccess;

const createListingAction = Actions.createListing;
const createListingSuccessAction = Actions.createListingSuccess;
const createListingFailureAction = Actions.createListingFailure;

const updateListingAction = Actions.updateListing;
const updateListingSuccessAction = Actions.updateListingSuccess;
const updateListingFailureAction = Actions.updateListingFailure;

const deleteListingAction = Actions.deleteListing;
const deleteListingSuccessAction = Actions.deleteListingSuccess;

const getListing = (id) => {
  return dispatch => {
    dispatch(getListingAction());
    axios.get(`${API_ROOT}/listings/${id}`)
      .then(function (response) {
        const responseData = response.data.listing;
        console.log("daddy", responseData);
        const listing = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          description: responseData.description,
          priceDetails: responseData.price_details,
          userId: responseData.user_id,
          images: responseData.images
        };
        dispatch(getListingSuccessAction(listing))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const createListing = (newListing) => {
  console.log(newListing);
  let formData = new FormData();
  formData.append('title', newListing.title);
  formData.append('description', newListing.description);
  formData.append('price', newListing.price);
  formData.append('price_details', newListing.priceDetails);
  formData.append('address', newListing.address);
  formData.append('user_id', newListing.userId);
  for (var i = 0; i < newListing.pictures.length; i++) {
    console.log(newListing.pictures[i]);
    formData.append("images[]", newListing.pictures[i]);
  }
  return dispatch => {
    dispatch(createListingAction());
    axios.post(`${API_ROOT}/listings`, formData)
      .then(async (response) => {
        console.log(response);
        dispatch(createListingSuccessAction(response.data.listing));
        if (newListing.userId) {
          dispatch(push('/dashboard'));
        } else {
          dispatch(push('/'));
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(createListingFailureAction(error.response.data.errors));
        // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
      });
  }
};

const getListings = () => {
  return dispatch => {
    dispatch(getListingsAction());
    axios.get(`${API_ROOT}/listings`)
      .then(function (response) {
        const responseData = response.data.listings;
        let data = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            description: child.description,
            priceDetails: child.price_details,
            userId: child.user_id,
            images: child.images
          };
          console.log(childData);
          data.push(childData);
        });
        dispatch(getListingsSuccessAction(data))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const getLatestListings = () => {
  return dispatch => {
    dispatch(getLatestListingsAction());
    axios.get(`${API_ROOT}/listings?limit=4`)
      .then(function (response) {
        console.log(response)
        const responseData = response.data.listings;
        let data = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            description: child.description,
            priceDetails: child.price_details,
            userId: child.user_id,
            images: child.images
          };
          data.push(childData);
        });
        dispatch(getLatestListingsSuccessAction(data))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const getFeaturedListings = () => {
  return dispatch => {
    dispatch(getFeaturedListingsAction());
    axios.get(`${API_ROOT}/listings/featured?limit=4`)
      .then(function (response) {
        console.log("featured", response.data)
        const responseData = response.data.listings;
        let data = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            description: child.description,
            priceDetails: child.price_details,
            userId: child.user_id,
            images: child.images
          };
          data.push(childData);
        });
        dispatch(getFeaturedListingsSuccessAction(data))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const getUserListings = (id) => {
  return dispatch => {
    dispatch(getUserListingsAction());
    axios.get(`${API_ROOT}/listings/user_listings?user_id=${id}`)
      .then(function (response) {
        const responseData = response.data.listings;
        let data = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            description: child.description,
            priceDetails: child.price_details,
            userId: child.user_id,
            images: child.images
          };
          data.push(childData);
        });
        dispatch(getUserListingsSuccessAction(data))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const updateListing = (updatedListing) => {
  console.log(updatedListing);
  return dispatch => {
    dispatch(updateListingAction());
    axios.put(`${API_ROOT}/listings/${updatedListing.id}`, {
        id: updatedListing.id,
        title: updatedListing.title,
        description: updatedListing.description,
        price: updatedListing.price,
        price_details: updatedListing.priceDetails,
        address: updatedListing.address,
        user_id: updatedListing.userId
      })
      .then(async (response) => {
        console.log(response);
        const responseData = response.data.listing;
        const data = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          description: responseData.description,
          priceDetails: responseData.price_details,
          userId: responseData.user_id
        };
        dispatch(updateListingSuccessAction(data));
      })
      .catch((error) => {
        console.log(error.response);
        // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
      });
  }
};

const deleteListing = (id) => {
  return dispatch => {
    dispatch(deleteListingAction());
    axios.delete(`${API_ROOT}/listings/${id}`)
      .then(function (response) {
        dispatch(deleteListingSuccessAction(id))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

export default {
  createListing,
  getListing,
  getListings,
  getLatestListings,
  getFeaturedListings,
  getUserListings,
  updateListing,
  deleteListing
};