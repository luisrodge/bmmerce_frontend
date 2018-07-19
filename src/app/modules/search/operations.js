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
    dispatch(push(`/search/${query}`));
  }
};

const search = (query) => {
  return dispatch => {
    dispatch(searchAction());
    axios.get(`${API_ROOT}/search?query=${query}`)
      .then(function (response) {
        const responseData = response.data.listings;
        console.log("Hsds", response);
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
              contactNumber: child.contact_number,
              emailFlag: child.email_flag,
              smsFlag: child.sms_flag,
              phoneCallFlag: child.phone_call_flag,
              whatsappFlag: child.whatsapp_flag,
              userId: child.user_id,
              images: child.images,
              createdAt: child.created_at
            };
            data.push(childData);
          });
          dispatch(searchSuccessAction(data));
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