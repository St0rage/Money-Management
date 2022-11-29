import axios from 'axios';
import currency from 'currency.js';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {IcTransDeposit, IcTransWithdraw} from '../../../assets';
import {API_HOST} from '../../../config';
import {setLoadingAlert, setRefreshPiggyBank} from '../../../redux/action';
import {dateFormat, getData} from '../../../utils';
import {Alert, Gap} from '../../atoms';

const Icon = ({status}) => {
  switch (status) {
    case 1:
      return <IcTransDeposit />;
    case 0:
      return <IcTransWithdraw />;
    default:
      return <IcTransDeposit />;
  }
};

const Transaction = ({type, status, amount, date, transactionName, id}) => {
  const [alert, setAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Alert and Delete
  const onDeletePiggyBankTransaction = () => {
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
  const onDeleteWhislistTransaction = () => {
    setAlertFail(true);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onLongPress={() => setAlert(true)}
        style={styles.container}>
        <Icon status={status} />
        <Gap width={10} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>{transactionName}</Text>
          <Gap height={5} />
          <Text style={styles.date}>{dateFormat(date)}</Text>
        </View>
        <Text style={styles.transaction}>
          {currency(amount, {separator: '.', symbol: 'Rp '}).format()}
        </Text>
      </TouchableOpacity>

      <Alert
        type="default"
        show={alert}
        message="Yakin ingin menghapus transaksi ini?"
        onCancelPressed={() => setAlert(false)}
        onConfirmPressed={
          type == 'piggy-bank'
            ? onDeletePiggyBankTransaction
            : onDeleteWhislistTransaction
        }
      />

      <Alert
        type="success"
        show={alertSuccess}
        message={message}
        onConfirmPressed={() => {
          setAlertSuccess(false);
          dispatch(setRefreshPiggyBank());
        }}
      />

      <Alert
        type="fail"
        show={alertFail}
        message={message}
        onConfirmPressed={() => setAlertFail(false)}
      />
    </>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(14),
    color: '#000',
  },
  date: {
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(12),
    color: '#000',
  },
  transaction: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(17),
    color: '#000',
  },
});
