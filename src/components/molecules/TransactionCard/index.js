import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { IcWalletDeposit } from '../../../assets'
import { Gap } from '../../atoms'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInputMask } from 'react-native-masked-text'

const TransactionCard = ({...restProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <IcWalletDeposit />
        <Gap width={20} /> 
        <Text style={styles.name}>Tabungan Pribadi</Text>
      </View>
      <Gap height={10} />
      <Text style={styles.label}>Jumlah Transaksi</Text>
      <Gap height={10} />
      <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#CDCDCD' }}>
        <TextInputMask 
          type={'money'}
          options={{ 
            precision: 0,
            separator: ',',
            delimiter: '.',
            unit: 'Rp ',
            suffixUnit: ''
          }}
          style={styles.input}
          placeholder='Rp 0'
          placeholderTextColor='#7C7C7C'
          keyboardType='number-pad'
          {...restProps}
        />
      </View>
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  type: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CDCDCD'
  },
  name: {
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(16),
    color: '#000'
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: RFValue(11),
    color: '#7C7C7C'
  },
  input: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(34),
    paddingBottom: 10,
  }
})