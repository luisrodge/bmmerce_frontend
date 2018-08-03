import axios from 'axios';

import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

const getAccountAction = Actions.getAccount;
const getAccountSuccessAction = Actions.getAccountSuccess;
const updateAccountAction = Actions.updateAccount;
const updateAccountSuccessAction = Actions.updateAccountSuccess;
const updateAccountFailureAction = Actions.updateAccountFailure;

const getBusinessAction = Actions.getBusiness;
const getBusinessSuccessAction = Actions.getBusinessSuccess;
const updateBusinessAction = Actions.updateBusiness;
const updateBusinessSuccessAction = Actions.updateBusinessSuccess;
const updateBusinessFailureAction = Actions.updateBusinessFailure;

const getAccount = () => {
  return dispatch => {
    dispatch(getAccountAction());
    axios.get(`${API_ROOT}/admin/account`)
      .then(function (response) {
        const responseData = response.data.user;
        console.log(response)
        const account = {
          id: responseData.id,
          name: responseData.name,
          email: responseData.email,
          avatar: responseData.avatar,
          passwordDigest: responseData.password_digest
        };
        dispatch(getAccountSuccessAction(account));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const updateAccount = (updatedAccount, avatarImage) => {
  let formData = new FormData();
  formData.append('name', updatedAccount.name);
  formData.append('email', updatedAccount.email);
  if (updatedAccount.password !== '') {
    formData.append('password', updatedAccount.passwordDigest);
  }
  if (avatarImage !== '') {
    formData.append("avatar", avatarImage);
  }

  return dispatch => {
    dispatch(updateAccountAction());
    axios.put(`${API_ROOT}/admin/account`, formData)
      .then(async (response) => {
        const responseData = response.data.user;
        const account = {
          id: responseData.id,
          name: responseData.name,
          email: responseData.email,
          avatar: responseData.avatar,
          passwordDigest: responseData.password_digest
        };
        dispatch(updateAccountSuccessAction(account));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(updateAccountFailureAction(error.response.data.errors));
      });
  }
};

const getBusiness = () => {
  return dispatch => {
    dispatch(getBusinessAction());
    axios.get(`${API_ROOT}/admin/business`)
      .then(function (response) {
        const responseData = response.data.business;
        console.log(responseData)
        const business = {
          id: responseData.id,
          name: responseData.name,
          logo: responseData.logo,
          coverImage: responseData.cover_image,
          address: responseData.address,
        };
        dispatch(getBusinessSuccessAction(business));
      })
      .catch(function (error) {
        //dispatch(getUsersFailureAction(error.response.data.data));
      });
  }
}

const updateBusiness = (updatedBusiness, logo, coverImage) => {
  let formData = new FormData();
  formData.append('name', updatedBusiness.name);
  formData.append('address', updatedBusiness.address);
  if (logo !== '') formData.append("logo", logo);
  if (coverImage !== '') formData.append("cover_image", coverImage);

  return dispatch => {
    dispatch(updateBusinessAction());
    axios.put(`${API_ROOT}/admin/business`, formData)
      .then(async (response) => {
        const responseData = response.data.business;
        const business = {
          id: responseData.id,
          name: responseData.name,
          logo: responseData.logo,
          coverImage: responseData.cover_image,
          address: responseData.address,
        };
        dispatch(updateBusinessSuccessAction(business));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(updateAccountFailureAction(error.response.data.errors));
      });
  }
};



export default {
  getAccount,
  updateAccount,
  getBusiness,
  updateBusiness
};