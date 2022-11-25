import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {
  BackButton,
  Gap,
  TransactionAction,
  TransactionCardWithdraw,
} from '../../components';
import {piggyBankWithdrawAction} from '../../redux/action';

const PiggyBankWithdraw = ({route}) => {
  const initialState = {
    transaction_name: '',
    amount: '0',
  };

  const [data, setData] = useState(initialState);

  const {id, piggyBankDetail} = route.params;
  const dispatch = useDispatch();

  const withdraw = () => {
    dispatch(piggyBankWithdrawAction(data, setData, initialState, id));
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackButton type="transaction" />
          <Gap width={10} />
          <Text style={styles.title}>Withdraw</Text>
        </View>
      </View>
      <View style={styles.card}>
        <TransactionCardWithdraw
          type="piggy-bank"
          name={piggyBankDetail.piggy_bank_name}
          value={data.transaction_name}
          onChangeText={value => setData({...data, transaction_name: value})}
          amountValue={data.amount}
          onChangeAmount={value =>
            setData({
              ...data,
              amount: parseInt(value.substring(2).split('.').join('')),
            })
          }
        />
      </View>
      <TransactionAction
        label="Withdraw"
        total={piggyBankDetail.piggy_bank_total}
        disabled={!Boolean(data.transaction_name && data.amount >= 10000)}
        onPress={withdraw}
      />
    </View>
  );
};

export default PiggyBankWithdraw;

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
