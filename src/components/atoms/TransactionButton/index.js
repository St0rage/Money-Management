import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {IcDeposit, IcWithdraw} from '../../../assets';

const Icon = ({label}) => {
  switch (label) {
    case 'Deposit':
      return <IcDeposit />;
    case 'Withdraw':
      return <IcWithdraw />;
    default:
      return <IcDeposit />;
  }
};

const TransactionButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Icon label={label} />
    </TouchableOpacity>
  );
};

export default TransactionButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 100,
    width: '48%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(14),
    color: '#fff',
  },
});
