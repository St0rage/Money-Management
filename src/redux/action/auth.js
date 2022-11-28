import axios from 'axios';
import {showMessage, storeData, getData} from '../../utils';
import {setLoading} from './global';
import {API_HOST} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setBalance, setPiggyBanks, setWhislists} from './main';

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
          dispatch(setUser({}));
          dispatch(setBalance({}));
          dispatch(setPiggyBanks([]));
          dispatch(setWhislists([]));
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
          dispatch(setUser(res.data.data));
          navigation.reset({index: 0, routes: [{name: 'Main'}]});
        })
        .catch(err => {
          AsyncStorage.clear();
          navigation.reset({index: 0, routes: [{name: 'Login'}]});
        });
    } else {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    }
  });
};

export const changePasswordAction =
  (data, setData, intialState, navigation) => dispatch => {
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
          showMessage(res.data.message, 'success');
          setData({...intialState});
          dispatch(logoutAction(navigation));
        })
        .catch(err => {
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
          showMessage(msg, 'danger');
        });
    });
  };

export const registerUserAction = (data, setData, initialState) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/register`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
      })
      .then(res => {
        dispatch(setLoading(false));
        setData({...initialState});
        showMessage(res.data.message, 'success');
      })
      .catch(err => {
        dispatch(setLoading(false));
        const data = err.response.data.errors;
        let msg = '';
        const errName = Object.hasOwn(data, 'name') ? data.name : [];
        const errEmail = Object.hasOwn(data, 'email') ? data.email : [];
        if (errName.length != 0) {
          errName.forEach((value, i) => {
            if (i !== errName.length - 1) {
              msg += value + '\n\n';
            } else {
              msg += errEmail.length != 0 ? value + '\n\n' : value;
            }
          });
        }
        if (errEmail.length != 0) {
          errEmail.forEach((value, i) => {
            if (i !== errEmail.length - 1) {
              msg += value + '\n\n';
            } else {
              msg += value;
            }
          });
        }
        showMessage(msg, 'danger');
      });
  });
};
