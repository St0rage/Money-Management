import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {IcWallet} from '../../../assets';
import currency from 'currency.js';

const PiggyBankItem = ({piggy_bank_name, total}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <IcWallet />
        <Text style={styles.label}>{piggy_bank_name}</Text>
      </View>
      <Text style={styles.total}>
        {currency(total, {separator: '.', symbol: 'Rp'}).format()}
      </Text>
    </TouchableOpacity>
  );
};

export default PiggyBankItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(17),
    color: '#000',
    marginLeft: 10,
  },
  total: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(17),
    color: '#000',
  },
});
