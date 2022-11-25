import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Gap} from '../../atoms';
import currency from 'currency.js';
import {useNavigation} from '@react-navigation/native';

const WhislistItem = ({whislist_name, target, progress, id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate('WhislistTransaction', {id})}>
      <Text style={styles.label}>{whislist_name}</Text>
      <Gap height={10} />
      <Text style={styles.total}>
        {currency(target, {separator: '.', symbol: 'Rp '}).format()}
      </Text>
      <Gap height={15} />
      <View style={styles.progressBackground}>
        <View style={styles.progress(progress)} />
      </View>
      <Gap height={15} />
    </TouchableOpacity>
  );
};

export default WhislistItem;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: '#F2F2F2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(14),
    color: '#000',
  },
  total: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(14),
    color: '#000',
  },
  progressBackground: {
    width: '100%',
    height: 17,
    backgroundColor: '#CECECE',
    borderRadius: 5,
  },
  progress: progress => ({
    width: !progress ? '0%' : `${progress}%`,
    height: 17,
    backgroundColor: '#000',
    borderRadius: 5,
  }),
});
