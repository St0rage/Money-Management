import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {
  BackButton,
  Gap,
  TransactionAction,
  TransactionCardDeposit,
} from '../../components';
import {API_HOST} from '../../config';
import {piggyBankDepositAction, setLoading} from '../../redux/action';
import {getData, showMessage} from '../../utils';

const PiggyBankDeposit = ({route}) => {
  const initialState = {
    amount: '0',
  };

  const [data, setData] = useState(initialState);

  const {id, piggyBankDetail} = route.params;
  const dispatch = useDispatch();

  const deposit = () => {
    dispatch(piggyBankDepositAction(data, setData, initialState, id));
    // dispatch(setLoading(true));
    // getData('token').then(res => {
    //   axios
    //     .post(`${API_HOST.url}/piggybank/${id}/transaction/deposit`, data, {
    //       headers: {
    //         Accept: 'applications/json',
    //         Authorization: res.value,
    //       },
    //     })
    //     .then(res => {
    //       console.log(res);
    //       dispatch(setLoading(false));
    //       setData({...initialState});
    //       showMessage(res.data.message, 'success');
    //     });
    // });
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackButton type="transaction" />
          <Gap width={10} />
          <Text style={styles.title}>Deposit</Text>
        </View>
      </View>
      <View style={styles.card}>
        <TransactionCardDeposit
          type="piggy-bank"
          name={piggyBankDetail.piggy_bank_name}
          value={data.amount}
          onChangeText={value =>
            setData({
              ...data,
              amount: parseInt(value.substring(2).split('.').join('')),
            })
          }
        />
      </View>
      <TransactionAction
        label="Deposit"
        total={piggyBankDetail.piggy_bank_total}
        disabled={!Boolean(data.amount >= 10000)}
        onPress={deposit}
      />
    </View>
  );
};

export default PiggyBankDeposit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 20,
    height: '20%',
    backgroundColor: '#000',
  },
  title: {
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(22),
    color: '#fff',
  },
  card: {
    position: 'absolute',
    paddingHorizontal: 30,
    width: '100%',
    marginTop: '20%',
  },
});
