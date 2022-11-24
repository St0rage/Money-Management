import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

export const setPiggyBankDetail = value => {
  return {type: 'SET_PIGGYBANK_DETAIL', value};
};

export const setPiggyBankTransactions = value => {
  return {type: 'SET_PIGGYBANK_TRANSACTIONS', value};
};

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

export const createPiggyBank = (data, setData, intialState) => dispatch => {
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
        setData({...intialState});
        showMessage(res.data.message, 'success');
      })
      .catch(err => {
        dispatch(setLoading(false));
        const errMsgs = err.response.data.errors.piggy_bank_name;
        let msg = '';
        errMsgs.forEach((value, i) => {
          if (i !== errMsgs.length - 1) {
            msg += value + '\n\n';
          } else {
            msg += value;
          }
        });
        showMessage(msg, 'danger');
      });
  });
};
