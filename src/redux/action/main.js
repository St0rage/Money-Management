import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
import {setLoading} from './global';

export const setBalance = value => {
  return {type: 'SET_BALANCE', value};
};

export const setPiggyBanks = value => {
  return {type: 'SET_PIGGYBANKS', value};
};

export const setWhislists = value => {
  return {type: 'SET_WHISLISTS', value};
};

export const mainAction = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    const getBalance = axios.get(`${API_HOST.url}/balance`, {
      headers: {Accept: 'application/json', Authorization: res.value},
    });
    const getPiggyBanks = axios.get(`${API_HOST.url}/piggybanks`, {
      headers: {Accept: 'application/json', Authorization: res.value},
    });
    const getWhislists = axios.get(`${API_HOST.url}/whislists`, {
      headers: {Accept: 'application/json', Authorization: res.value},
    });

    axios.all([getBalance, getPiggyBanks, getWhislists]).then(
      axios.spread((...responses) => {
        const resBalance = responses[0];
        const resPiggyBanks = responses[1];
        const resWhislists = responses[2];

        dispatch(setBalance(resBalance.data.data));
        dispatch(setPiggyBanks(resPiggyBanks.data.data));
        dispatch(setWhislists(resWhislists.data.data));
        dispatch(setLoading(false));
      }),
    );
  });
};
