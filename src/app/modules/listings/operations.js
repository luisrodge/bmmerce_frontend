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

const getFeaturedListingsAction = Actions.getFeaturedListings;
const getFeaturedListingsSuccessAction = Actions.getFeaturedListingsSuccess;

const getUserListingsAction = Actions.getUserListings;
const getUserListingsSuccessAction = Actions.getUserListingsSuccess;

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
  console.log("Page", page);
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
            userId: child.user_id,
            images: child.images.map(image => ({
              src: image.listing_image.url
            })),
            isRental: child.is_rental,
            createdAt: child.created_at
          };
          listings.push(childData);
        });
        dispatch(getListingsSuccessAction(listings, meta.total_pages))
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
            contactName: child.contact_name,
            contactEmail: child.contact_email,
            contactNumber: child.contact_number,
            emailFlag: child.email_flag,
            smsFlag: child.sms_flag,
            phoneCallFlag: child.phone_call_flag,
            whatsappFlag: child.whatsapp_flag,
            userId: child.user_id,
            images: child.images,
            isRental: child.is_rental,
            createdAt: child.created_at
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
    axios.get(`${API_ROOT}/listing_type/listings/user_listings?user_id=${id}`)
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

const createListing = (newListing) => {
  console.log(newListing);
  let formData = new FormData();
  formData.append('title', newListing.title);
  formData.append('price', newListing.price);
  formData.append('description', newListing.description);
  formData.append('is_rental', newListing.isRental);
  formData.append('address', newListing.address);
  formData.append('contact_name', newListing.contactName);
  formData.append('contact_email', newListing.contactEmail);
  formData.append('contact_number', newListing.contactNumber);
  formData.append('email_flag', newListing.emailFlag);
  formData.append('whatsapp_flag', newListing.whatsappFlag);
  formData.append('sms_flag', newListing.smsFlag);
  formData.append('phone_call_flag', newListing.phoneCallFlag);
  if (newListing.userId) {
    formData.append('user_id', newListing.userId);
  }
  for (var i = 0; i < newListing.pictures.length; i++) {
    console.log(newListing.pictures[i]);
    formData.append("images[]", newListing.pictures[i]);
  }
  return dispatch => {
    dispatch(createListingAction());
    axios.post(`${API_ROOT}/listing_type/listings`, formData)
      .then(async (response) => {
        console.log("Images", response.data.listing.images[0]['listing_image']);
        let responseData = response.data.listing;
        console.log(response.data);
        const newListing = {
          id: responseData.id,
          title: responseData.title,
          price: responseData.price,
          address: responseData.address,
          userId: responseData.user_id,
          images: responseData.images.map(image => ({
            src: image.listing_image.url
          })),
          isRental: responseData.is_rental,
          createdAt: responseData.created_at
        };
        dispatch(createListingSuccessAction(newListing));
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(createListingFailureAction(error.response.data.errors));
        // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
      });
  }
};

const updateListing = (updatedListing, newImages = []) => {
  console.log(updatedListing);
  let formData = new FormData();
  formData.append('title', updatedListing.title);
  formData.append('description', updatedListing.description);
  formData.append('price', updatedListing.price);
  formData.append('price_details', updatedListing.priceDetails);
  formData.append('address', updatedListing.address);
  formData.append('user_id', updatedListing.userId);
  // Append new images to be uploaded
  if (newImages.length > 0) {
    for (var i = 0; i < newImages.length; i++) {
      console.log(newImages[i]);
      formData.append("images[]", newImages[i]);
    }
  }
  return dispatch => {
    dispatch(updateListingAction());
    axios.put(`${API_ROOT}/listing_type/listings/${updatedListing.id}`, formData)
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
          userId: responseData.user_id,
          images: responseData.images
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
    axios.delete(`${API_ROOT}/listing_type/listings/${id}`)
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
  getFeaturedListings,
  getUserListings,
  updateListing,
  deleteListing
};