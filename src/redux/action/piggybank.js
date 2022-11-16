import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

export const primaryPiggyBankAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/piggybank/create`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
      })
      .then(res => {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'Main'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(err.response.data.message, 'danger');
      });
  });
};
