import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading, setLoadingAlert} from './global';

export const setPiggyBankDetail = value => {
  return {type: 'SET_PIGGYBANK_DETAIL', value};
};

export const setPiggyBankTransactions = value => {
  return {type: 'SET_PIGGYBANK_TRANSACTIONS', value};
};

export const setPiggyBankTransactionsPush = value => {
  return {type: 'SET_PIGGYBANK_TRANSACTIONS_PUSH', value};
};

export const setRefreshPiggyBank = () => {
  return {type: 'SET_REFRESH_PIGGYBANK'};
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

export const createPiggyBankAction =
  (data, setData, intialState) => dispatch => {
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

export const updatePiggyBankAction = (data, id, navigation) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    axios
      .put(`${API_HOST.url}/piggybank/${id}/update`, data, {
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

export const deletePiggyBankAction =
  (id, setAlert, setMessage, setAlertSuccess, setAlertFail) => dispatch => {
    setAlert(false);
    dispatch(setLoadingAlert(true));
    getData('token').then(res => {
      axios
        .delete(`${API_HOST.url}/piggybank/${id}/delete`, {
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

export const deletePiggyBankTransactionAction =
  (id, setAlert, setMessage, setAlertSuccess, setAlertFail) => dispatch => {
    setAlert(false);
    dispatch(setLoadingAlert(true));
    getData('token').then(res => {
      axios
        .delete(`${API_HOST.url}/piggybank/transaction/${id}/delete`, {
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

export const getPiggyBankAllAction = (page, id) => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(res => {
    const getDetail = axios.get(`${API_HOST.url}/piggybank/${id}/detail`, {
      headers: {
        Accept: 'application/json',
        Authorization: res.value,
      },
    });
    const getTransactions = axios.get(
      `${API_HOST.url}/piggybank/${id}/transactions`,
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

        dispatch(setPiggyBankDetail(resDetail.data.data));
        dispatch(setPiggyBankTransactions(resTransactions.data.data));
        dispatch(setLoading(false));
      }),
    );
  });
};

export const loadMorePiggybankTransactionAction = (page, id) => dispatch => {
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/piggybank/${id}/transactions`, {
        headers: {
          Accept: 'application/json',
          Authorization: res.value,
        },
        params: {
          page,
        },
      })
      .then(res => {
        dispatch(setPiggyBankTransactionsPush(res.data.data));
      });
  });
};

export const piggyBankDepositAction =
  (data, setData, intialState, id) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(res => {
      axios
        .post(`${API_HOST.url}/piggybank/${id}/transaction/deposit`, data, {
          headers: {
            Accept: 'applications/json',
            Authorization: res.value,
          },
        })
        .then(res => {
          dispatch(setLoading(false));
          setData({...intialState});
          showMessage(res.data.message, 'success');
        });
    });
  };

export const piggyBankWithdrawAction =
  (data, setData, intialState, id) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(res => {
      axios
        .post(`${API_HOST.url}/piggybank/${id}/transaction/withdraw`, data, {
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
