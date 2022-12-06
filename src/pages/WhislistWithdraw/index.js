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
import {whislistWithdrawAction} from '../../redux/action';

const WhislistWithdraw = ({route}) => {
  const initialState = {
    transaction_name: '',
    amount: '0',
  };

  const [data, setData] = useState(initialState);

  const {id, whislistDetail} = route.params;
  const dispatch = useDispatch();

  const withdraw = () => {
    dispatch(whislistWithdrawAction(data, setData, initialState, id));
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
          type="whislist"
          name={whislistDetail.whislist_name}
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
        total={whislistDetail.whislist_total}
        onPress={withdraw}
        disabled={!Boolean(data.transaction_name && data.amount >= 500)}
      />
    </View>
  );
};

export default WhislistWithdraw;

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
