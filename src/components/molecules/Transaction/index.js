import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcTransDeposit, IcTransWithdraw} from '../../../assets';
import {Gap} from '../../atoms';
import {RFValue} from 'react-native-responsive-fontsize';
import currency from 'currency.js';
import {dateFormat} from '../../../utils';

const Icon = ({type}) => {
  switch (type) {
    case 1:
      return <IcTransDeposit />;
    case 0:
      return <IcTransWithdraw />;
    default:
      return <IcTransDeposit />;
  }
};

const Transaction = ({type, amount, date, transactionName}) => {
  return (
    <View style={styles.container}>
      <Icon type={type} />
      <Gap width={10} />
      <View style={{flex: 1}}>
        <Text style={styles.title}>{transactionName}</Text>
        <Gap height={5} />
        <Text style={styles.date}>{dateFormat(date)}</Text>
      </View>
      <Text style={styles.transaction}>
        {currency(amount, {separator: '.', symbol: 'Rp '}).format()}
      </Text>
    </View>
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
