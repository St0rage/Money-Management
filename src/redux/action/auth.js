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
      // storeData('user', res.data.data);
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

export const getUserAction = navigation => dispatch => {
  getData('token').then(res => {
    if (res) {
      axios
        .get(`${API_HOST.url}/user`, {
          headers: {
            Accept: 'application/json',
            Authorization: res.value,
          },
        })
        .then(res => {
          console.log(res);
          dispatch(setUser(res.data.data));
          navigation.reset({index: 0, routes: [{name: 'Main'}]});
        })
        .catch(err => {
          console.log(err.response);
          AsyncStorage.clear();
          navigation.reset({index: 0, routes: [{name: 'Login'}]});
        });
    } else {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    }
  });
};

export const changePasswordAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .put(`${API_HOST.url}/user/changepassword`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
      })
      .then(res => {
        console.log(res);
        showMessage(res.data.message, 'success');
        dispatch(logoutAction(navigation));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(setLoading(false));
        const errMsgs = err.response.data.errors.password;
        let msg = '';
        errMsgs.forEach((value, i) => {
          if (i !== errMsgs.length - 1) {
            msg += value + '\n\n';
          } else {
            msg += value;
          }
        });
        // console.log(msg);
        showMessage(msg, 'danger');
      });
  });
};
