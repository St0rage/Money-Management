import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {
  BackButton,
  Gap,
  TransactionAction,
  TransactionCardDeposit,
} from '../../components';
import {whislistDepositAction} from '../../redux/action';

const WhislistDeposit = ({route}) => {
  const intialState = {
    amount: '0',
  };

  const [data, setData] = useState(intialState);

  const {id, whislistDetail} = route.params;
  const dispatch = useDispatch();

  const deposit = () => {
    dispatch(whislistDepositAction(data, setData, intialState, id));
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
          type="whislist"
          name={whislistDetail.whislist_name}
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
        total={whislistDetail.whislist_total}
        disabled={!Boolean(data.amount > 10000)}
        onPress={deposit}
      />
    </View>
  );
};

export default WhislistDeposit;

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
