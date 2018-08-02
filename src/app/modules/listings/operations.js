import axios from 'axios';

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const getListingAction = Actions.getListing;
const getListingSuccessAction = Actions.getListingSuccess;

const getListingsAction = Actions.getListings;
const getListingsSuccessAction = Actions.getListingsSuccess;

const getAdminListingsAction = Actions.getAdminListings;
const getAdminListingsSuccessAction = Actions.getAdminListingsSuccess;

const createListingAction = Actions.createListing;
const createListingSuccessAction = Actions.createListingSuccess;
const createListingFailureAction = Actions.createListingFailure;

const updateListingAction = Actions.updateListing;
const updateListingSuccessAction = Actions.updateListingSuccess;
//const updateListingFailureAction = Actions.updateListingFailure;

const deleteListingAction = Actions.deleteListing;
const deleteListingSuccessAction = Actions.deleteListingSuccess;

const getListing = (id) => {
  return dispatch => {
    dispatch(getListingAction());
    axios.get(`${API_ROOT}/listing_type/listings/${id}`)
      .then(function (response) {
        const responseData = response.data.listing;
        const listing = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          description: responseData.description,
          priceDetails: responseData.price_details,
          userId: responseData.user_id,
          userName: responseData.user.name,
          images: responseData.images
        };
        dispatch(getListingSuccessAction(listing))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const getListings = (rental = false, page = null, limit = null) => {
  let baseUrl = rental ? `${API_ROOT}/listing_type/rentals` : `${API_ROOT}/listing_type/listings`;
  return dispatch => {
    dispatch(getListingsAction());
    axios.get(baseUrl, {
        params: {
          page: page,
          limit: limit
        }
      })
      .then(function (response) {
        const responseData = response.data.listings;
        const meta = response.data.meta;
        let listings = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            listedBy: child.business ? {account: child.business, business: true} : {account: child.account},
            images: child.images.map(image => ({
              src: image.listing_image.url
            })),
            isRental: child.is_rental,
            createdAt: child.created_at
          };
          listings.push(childData);
        });
        dispatch(getListingsSuccessAction(listings, meta.total_pages));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const getAdminListings = (page) => {
  return dispatch => {
    dispatch(getAdminListingsAction());
    axios.get(`${API_ROOT}/admin/listings?page=${page}`)
      .then(function (response) {
        const responseData = response.data.listings;
        const meta = response.data.meta;
        let listings = [];
        responseData.map(child => {
          const childData = {
            id: child.id,
            title: child.title,
            price: child.price,
            address: child.address,
            accountId: child.account_id,
            description: child.description,
            images: child.images.map(image => ({
              src: image.listing_image.url
            })),
            isRental: child.is_rental,
            createdAt: child.created_at
          };
          listings.push(childData);
        });
        dispatch(getAdminListingsSuccessAction(listings, meta.total_pages))
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
  formData.append('price', newListing.price);
  formData.append('description', newListing.description);
  formData.append('is_rental', newListing.isRental);
  formData.append('address', newListing.address);
  for (var i = 0; i < newListing.pictures.length; i++) {
    formData.append("images[]", newListing.pictures[i]);
  }
  return dispatch => {
    dispatch(createListingAction());
    axios.post(`${API_ROOT}/admin/listings`, formData)
      .then(async (response) => {
        let responseData = response.data.listing;
        const newListing = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          accountId: responseData.account_id,
          accountName: responseData.account.name,
          images: responseData.images.map(image => ({
            src: image.listing_image.url
          })),
          isRental: responseData.is_rental,
          createdAt: responseData.created_at
        };
        dispatch(createListingSuccessAction(newListing));
      })
      .catch((error) => {
        console.log(error);
        // dispatch(createListingFailureAction(error.response.data.errors));
        // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
      });
  }
};

const updateListing = (updatedListing, newImages = []) => {
  let formData = new FormData();
  formData.append('title', updatedListing.title);
  formData.append('description', updatedListing.description);
  formData.append('price', updatedListing.price);
  formData.append('address', updatedListing.address);
  // Append new images to be uploaded
  if (newImages.length > 0) {
    for (var i = 0; i < newImages.length; i++) {
      console.log(newImages[i]);
      formData.append("images[]", newImages[i]);
    }
  }
  return dispatch => {
    dispatch(updateListingAction());
    axios.put(`${API_ROOT}/admin/listings/${updatedListing.id}`, formData)
      .then(async (response) => {
        const responseData = response.data.listing;
        const data = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          description: responseData.description,
          priceDetails: responseData.price_details,
          images: responseData.images.map(image => ({
            src: image.listing_image.url
          })),
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
    axios.delete(`${API_ROOT}/admin/listings/${id}`)
      .then(function (response) {
        dispatch(deleteListingSuccessAction(id))
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
};

export default {
  createListing,
  getListing,
  getListings,
  getAdminListings,
  updateListing,
  deleteListing
};