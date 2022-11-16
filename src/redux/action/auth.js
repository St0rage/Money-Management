import axios from 'axios';
import {showMessage, storeData, getData} from '../../utils';
import {setLoading} from './global';
import {API_HOST} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUser = value => {
  return {type: 'SET_USER', value};
};

export const loginAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, data, {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(res => {
      dispatch(setLoading(false));
      // simpan data user
      storeData('user', res.data.data);
      dispatch(setUser(res.data.data));
      // simpan token\
      storeData('token', {value: `Bearer ${res.data.token}`});
      // hasPrimaryPiggyBank
      const hasPrimaryPiggyBank = res.data.piggy_banks_count;

      if (hasPrimaryPiggyBank == 0) {
        navigation.reset({index: 0, routes: [{name: 'PrimaryPiggyBank'}]});
      } else {
        navigation.reset({index: 0, routes: [{name: 'Main'}]});
      }
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err.response.data.message, 'danger');
    });
};

export const logoutAction = navigation => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/logout`, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
      })
      .then(res => {
        dispatch(setLoading(false));
        AsyncStorage.multiRemove(['user', 'token']).then(() => {
          navigation.reset({index: 0, routes: [{name: 'Login'}]});
        });
      });
  });
};
