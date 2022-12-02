import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading, setLoadingAlert} from './global';

export const setWhislistDetail = value => {
  return {type: 'SET_WHISLIST_DETAIL', value};
};

export const setWhislistTransactions = value => {
  return {type: 'SET_WHISLIST_TRANSACTIONS', value};
};

export const setWhislistTransactionsPush = value => {
  return {type: 'SET_WHISLIST_TRANSACTIONS_PUSH', value};
};

export const setRefreshWhislist = () => {
  return {type: 'SET_REFRESH_WHISLIST'};
};

export const createWhislistAction =
  (data, setData, intialState) => dispatch => {
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

export const updateWhislistAction = (data, id, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .put(`${API_HOST.url}/whislist/${id}/update`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
      })
      .then(res => {
        dispatch(setLoading(false));
        showMessage(res.data.message, 'success');
        navigation.reset({index: 0, routes: [{name: 'Main'}]});
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

export const deleteWhislistAction =
  (id, setAlert, setMessage, setAlertSuccess, setAlertFail) => dispatch => {
    setAlert(false);
    dispatch(setLoadingAlert(true));
    getData('token').then(res => {
      axios
        .delete(`${API_HOST.url}/whislist/${id}/delete`, {
          headers: {
            Accept: 'application/json',
            Authorization: res.value,
          },
        })
        .then(res => {
          setAlert(false);
          setMessage(res.data.message);
          dispatch(setLoadingAlert(false));
          setAlertSuccess(true);
        })
        .catch(err => {
          setAlert(false);
          setMessage(err.response.data.message);
          dispatch(setLoadingAlert(false));
          setAlertFail(true);
        });
    });
  };

export const deleteWhislistTransactionAction =
  (id, setAlert, setMessage, setAlertSuccess, setAlertFail) => dispatch => {
    setAlert(false);
    dispatch(setLoadingAlert(true));
    getData('token').then(res => {
      axios
        .delete(`${API_HOST.url}/whislist/transaction/${id}/delete`, {
          headers: {
            Accept: 'application/json',
            Authorization: res.value,
          },
        })
        .then(res => {
          setMessage(res.data.message);
          dispatch(setLoadingAlert(false));
          setAlertSuccess(true);
        })
        .catch(err => {
          setMessage(err.response.data.message);
          dispatch(setLoadingAlert(false));
          setAlertFail(true);
        });
    });
  };

export const getWhislistAllAction = (page, id) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    const getDetail = axios.get(`${API_HOST.url}/whislist/${id}/detail`, {
      headers: {
        Accept: 'application/json',
        Authorization: res.value,
      },
    });
    const getTransactions = axios.get(
      `${API_HOST.url}/whislist/${id}/transactions`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
        params: {
          page,
        },
      },
    );

    axios.all([getDetail, getTransactions]).then(
      axios.spread((...response) => {
        const resDetail = response[0];
        const resTransactions = response[1];

        dispatch(setWhislistDetail(resDetail.data.data));
        dispatch(setWhislistTransactions(resTransactions.data.data));
        dispatch(setLoading(false));
      }),
    );
  });
};

export const loadMoreWhislistTransactionAction = (page, id) => dispatch => {
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/whislist/${id}/transactions`, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
        params: {
          page,
        },
      })
      .then(res => {
        dispatch(setWhislistTransactionsPush(res.data.data));
      });
  });
};

export const whislistDepositAction =
  (data, setData, intialState, id) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(res => {
      axios
        .post(`${API_HOST.url}/whislist/${id}/transaction/deposit`, data, {
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
          const errMsgs = err.response.data.errors.amount;
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

export const whislistWithdrawAction =
  (data, setData, intialState, id) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(res => {
      axios
        .post(`${API_HOST.url}/whislist/${id}/transaction/withdraw`, data, {
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
          const data = err.response.data.errors;
          let msg = '';
          const errAmount = Object.hasOwn(data, 'amount') ? data.amount : [];
          const errName = Object.hasOwn(data, 'transaction_name')
            ? data.transaction_name
            : [];
          if (errAmount.length != 0) {
            errAmount.forEach((value, i) => {
              if (i !== errAmount.length - 1) {
                msg += value + '\n\n';
              } else {
                msg += errName.length != 0 ? value + '\n\n' : value;
              }
            });
          }
          if (errName.length != 0) {
            errName.forEach((value, i) => {
              if (i !== errName.length - 1) {
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
