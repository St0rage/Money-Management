import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

export const createWhislist = (data, setData, intialState) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/whislist/create`, data, {
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
        const errMsgs = err.response.data.errors.whislist_name;
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